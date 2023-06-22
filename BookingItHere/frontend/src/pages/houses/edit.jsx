/**
 * @author Pedro Martins
 *
 * Edit house
 */
import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {api} from "../../services/api";

export default function EditHouse() {
    const [inputs, setInputs] = useState([]);
    const [error, setError] = useState([]);
    const MySwal = withReactContent(Swal)
    const redirect = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        const getHouse = async (id) => {
            await api.get(`/houses/${id}`)
                .then(res => {
                    setInputs(res.data.data)
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
        getHouse(id);
    }, [id]);

    const handleChange = e => {
        const {name, value} = e.target;
        setInputs(values => ({...values, [name]: value}));
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        await api.put(`/houses/${id}`, inputs)
            .then((res) => {
                if (res.data.code === 'houseUpdated') {
                    redirect('/admin/houses');
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

            <Form.Group as={Col} md="6" controlId="validationCustomName">

                <Form.Label>Nome da casa</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={inputs.name ?? ''}
                    onChange={handleChange}
                    isValid={!error.name}
                    isInvalid={!!error.name}
                    required
                />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustomDoorNumber">
                <Form.Label>Número da Porta</Form.Label>
                <Form.Control
                    type="text"
                    name="doorNumber"
                    value={inputs.doorNumber ?? ''}
                    onChange={handleChange}
                    isValid={!error.doorNumber}
                    isInvalid={!!error.doorNumber}
                    required
                />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustomfloorNumber">
                <Form.Label>Andar</Form.Label>
                <Form.Control
                    type="text"
                    name="floorNumber"
                    value={inputs.floorNumber ?? ''}
                    onChange={handleChange}
                    isValid={!error.floorNumber}
                    isInvalid={!!error.floorNumber}
                    required
                />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustomprice">
                <Form.Label>Preço</Form.Label>
                <Form.Control
                    type="text"
                    name="price"
                    value={inputs.price ?? ''}
                    onChange={handleChange}
                    isValid={!error.price}
                    isInvalid={!!error.price}
                    required
                />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustomguestsNumber">
                <Form.Label>Número de hospedes</Form.Label>
                <Form.Control
                    type="text"
                    name="guestsNumber"
                    value={inputs.guestsNumber ?? ''}
                    onChange={handleChange}
                    isValid={!error.guestsNumber}
                    isInvalid={!!error.guestsNumber}
                    required
                />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustomdistrict">
                <Form.Label>Distrito</Form.Label>
                <Form.Control
                    type="text"
                    name="district"
                    value={inputs.district ?? ''}
                    onChange={handleChange}
                    isValid={!error.district}
                    isInvalid={!!error.district}
                    required
                />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustomconcelho">
                <Form.Label>Concelho</Form.Label>
                <Form.Control
                    type="text"
                    name="concelho"
                    value={inputs.concelho ?? ''}
                    onChange={handleChange}
                    isValid={!error.concelho}
                    isInvalid={!!error.concelho}
                    required
                />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustompostalCode">
                <Form.Label>Código postal</Form.Label>
                <Form.Control
                    type="text"
                    name="postalCode"
                    value={inputs.postalCode ?? ''}
                    onChange={handleChange}
                    isValid={!error.postalCode}
                    isInvalid={!!error.postalCode}
                    required
                />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustomroad">
                <Form.Label>Rua</Form.Label>
                <Form.Control
                    type="text"
                    name="road"
                    value={inputs.road ?? ''}
                    onChange={handleChange}
                    isValid={!error.road}
                    isInvalid={!!error.road}
                    required
                />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustompropertyAssessment">
                <Form.Label>Artigo Matricial</Form.Label>
                <Form.Control
                    type="text"
                    name="propertyAssessment"
                    value={inputs.propertyAssessment ?? ''}
                    onChange={handleChange}
                    isValid={!error.propertyAssessment}
                    isInvalid={!!error.propertyAssessment}
                    required
                />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustomstatus">
                <Form.Label>Estado da casa</Form.Label>
                <Form.Control
                    type="text"
                    name="status"
                    value={inputs.status ?? ''}
                    onChange={handleChange}
                    isValid={!error.status}
                    isInvalid={!!error.status}
                    required
                />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustomstatus">
                <Form.Label>Proprietário</Form.Label>
                <Form.Control
                    type="text"
                    name="user_id"
                    value={inputs.user_id ?? ''}
                    onChange={handleChange}
                    isValid={!error.user_id}
                    isInvalid={!!error.user_id}
                    required
                />
            </Form.Group>

            <Button type="submit">Guardar</Button>
        </Form>
    );
}