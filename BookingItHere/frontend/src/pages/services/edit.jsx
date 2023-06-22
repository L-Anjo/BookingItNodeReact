/**
 * @author Pedro Martins
 *
 * Edit service
 */
import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {api} from "../../services/api";

export default function EditService() {
    const [inputs, setInputs] = useState([]);
    const [error, setError] = useState([]);
    const MySwal = withReactContent(Swal)
    const redirect = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        const getService = async (id) => {
            await api.get(`/services/${id}`)
                .then(res => {
                    setInputs(res.data.data)
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
        getService(id);
    }, [id]);

    const handleChange = e => {
        const {name, value} = e.target;
        setInputs(values => ({...values, [name]: value}));
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        await api.put(`/services/${id}`, inputs)
            .then((res) => {
                if (res.data.code === 'serviceUpdated') {
                    redirect('/admin/services');
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
                <Form.Label>Nome do serviço</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={inputs.name ?? ''}
                    onChange={handleChange}
                    isValid={!error.name}
                    isInvalid={!!error.name}
                    placeholder="Digite o nome do serviço"
                    required
                />
            </Form.Group>

            <Button type="submit">Guardar</Button>
        </Form>
    );
}