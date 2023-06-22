import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {api} from "../../services/api";

/**
 * @author Diogo
 */
export default function EditAnnouncement() {
    const [inputs, setInputs] = useState([]);
    const [error, setError] = useState([]);
    const MySwal = withReactContent(Swal)
    const redirect = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        const getAnnouncement = async (id) => {
            await api.get(`/announcements/${id}`)
                .then(res => {
                    setInputs(res.data.data)
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
        getAnnouncement(id);
    }, [id]);

    const handleChange = e => {
        const {name, value} = e.target;
        setInputs(values => ({...values, [name]: value}));
        validateInput(e);
    }

    const validateInput = e => {
        let {name, value} = e.target;
        setError(values => {
            const stateObj = {...values, [name]: ""};

        });
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        await api.put(`/announcements/${id}`, inputs)
            .then((res) => {
                if (res.data.code === 'AnnouncementUpdated') {
                    redirect('/');
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
            <Form.Group as={Col} md="6" controlId="validationCustomCasaID">
                <Form.Label>CasaID</Form.Label>
                <Form.Control
                    type="text"
                    name="house_id"
                    value={inputs.house_id ?? ''}
                    onChange={handleChange}
                    onBlur={validateInput}
                    isValid={!error.house_id && inputs.house_id}
                    isInvalid={error.house_id}
                    placeholder="CasaID"
                    required
                />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustomPrecoClick">
                <Form.Label>PrecoClick</Form.Label>
                <Form.Control
                    type="text"
                    name="priceClick"
                    value={inputs.priceClick ?? ''}
                    onChange={handleChange}
                    onBlur={validateInput}
                    isValid={!error.priceClick && inputs.priceClick}
                    isInvalid={error.priceClick}
                    placeholder="PrecoClick"
                    required
                />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustomNumClicks">
                <Form.Label>NumClicks</Form.Label>
                <Form.Control
                    type="text"
                    name="numbClicks"
                    value={inputs.numbClicks ?? ''}
                    onChange={handleChange}
                    onBlur={validateInput}
                    isValid={!error.numbClicks && inputs.numbClicks}
                    isInvalid={error.numbClicks}
                    placeholder="NumClicks"
                    required
                />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustomDataFim">
                <Form.Label>DataFim</Form.Label>
                <Form.Control
                    type="date"
                    name="end_date"
                    value={inputs.end_date ?? ''}
                    onChange={handleChange}
                    onBlur={validateInput}
                    isValid={!error.end_date && inputs.end_date}
                    isInvalid={error.end_date}
                    placeholder="DataFim"
                    required
                />
            </Form.Group>

            <Button type="submit">Guardar</Button>
        </Form>
    );
}