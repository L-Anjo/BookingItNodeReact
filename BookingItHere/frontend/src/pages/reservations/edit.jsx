/**
 * @author Pedro Martins
 *
 * Edit reservation
 */
import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {api} from "../../services/api";

export default function EditReservation() {
    const [headers] = useState({'Authorization': `Bearer ${localStorage.getItem('token')}`});
    const [reservationStates, setReservationStates] = useState([]);
    const [inputs, setInputs] = useState([]);
    const [error, setError] = useState([]);
    const MySwal = withReactContent(Swal)
    const redirect = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        const getReservation = async (id) => {
            await api.get(`/reservation/${id}`)
                .then(res => {
                    setInputs(res.data.data)
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
        const fetchReservationStates = async () => {
            try {
                const response = await api.get('/reservationStates', {headers});
                setReservationStates(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchReservationStates();
        getReservation(id);
    }, [id]);

    const handleChange = e => {
        const {name, value} = e.target;
        setInputs(values => ({...values, [name]: value}));
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        await api.put(`/reservation/${id}`, inputs, {headers: {...headers}})
            .then((res) => {
                if (res.data.code === 'reservationUpdated') {
                    redirect('/admin/reservation');
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
                <Form.Label>Estado</Form.Label>
                <Form.Control
                    as="select"
                    name="state_id"
                    value={inputs.state_id ?? ''}
                    onChange={handleChange}
                    isValid={!error.state_id}
                    isInvalid={!!error.state_id}
                    required
                >
                    <option value="">Selecione o estado</option>
                    {reservationStates.map((state) => (
                        <option key={state.id} value={state.id}>
                            {state.id} - {state.state}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>

            <Button type="submit">Guardar</Button>
        </Form>
    );
}