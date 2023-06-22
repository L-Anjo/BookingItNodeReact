/**
 * @author Pedro Martins
 *
 * Edit feedback
 */
import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {api} from "../../services/api";

export default function EditFeedback() {
    const [inputs, setInputs] = useState([]);
    const [error, setError] = useState([]);
    const MySwal = withReactContent(Swal)
    const redirect = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        const getFeedback = async (id) => {
            await api.get(`/feedbacks/${id}`)
                .then(res => {
                    setInputs(res.data.data)
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
        getFeedback(id);
    }, [id]);

    const handleChange = e => {
        const {name, value} = e.target;
        setInputs(values => ({...values, [name]: value}));
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        await api.put(`/feedbacks/${id}`, inputs)
            .then((res) => {
                if (res.data.code === 'feedbackUpdated') {
                    redirect('/admin/feedbacks');
                }
            }).catch((error) => {

                // Errors
                if (error.response.data.code) {
                    MySwal.fire({
                        title: 'Ocorreu um erro ao atualizar!'
                    });
                }

                if (error.response.data.errors) {
                    error.response.data.errors.map((error, key) => {
                        setError(values => ({
                            ...values,
                            [error.param]: error.msg
                        }));
                    })
                }
            });
    }

    return (
        <Form noValidate onSubmit={onSubmit}>
            <Form.Group as={Col} md="6" controlId="validationCustomClassification">
                <Form.Label>Classificação</Form.Label>
                <Form.Control
                    type="number"
                    name="classification"
                    value={inputs.classification ?? ''}
                    onChange={handleChange}
                    isValid={!error.classification}
                    isInvalid={!!error.classification}
                    placeholder="Classificação (1-5)"
                    min={1}
                    max={5}
                    required
                />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustomComment">
                <Form.Label>Comentário</Form.Label>
                <Form.Control
                    as="textarea"
                    name="comment"
                    value={inputs.comment ?? ''}
                    onChange={handleChange}
                    isValid={!error.comment && inputs.comment}
                    isInvalid={error.comment}
                    placeholder="Comentário"
                    required
                />
            </Form.Group>

            <Button type="submit">Guardar</Button>
        </Form>
    );
}