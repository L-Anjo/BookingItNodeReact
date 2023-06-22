/**
 * @author João Ponte
 *
 * Edit user
 */
import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {api} from "../../services/api";
import {AuthContext} from "../../middleware/auth";

export default function EditUser() {
    const [inputs, setInputs] = useState([]);
    const [error, setError] = useState([]);
    const [userTypes, setuserTypes] = useState([]);
    const MySwal = withReactContent(Swal)
    const redirect = useNavigate();
    const {id} = useParams();
    const {user} = useContext(AuthContext);

    useEffect(() => {
        getUser(id);
        if (user.isAdmin) {
            getAllUserTypes();
        }
    }, [id]);

    const getAllUserTypes = async () => {
        await api.get(`/usertypes`)
            .then(res => {
                setuserTypes(res.data.usertypes)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const getUser = async (id) => {
        if (!id) {
            return;
        }
        await api.get(`/users/${id}`)
            .then(res => {
                setInputs(res.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const handleChange = e => {
        const {name, value} = e.target;
        setInputs(values => ({...values, [name]: value}));
        validateInput(e);
    }

    const validateInput = e => {
        let {name, value} = e.target;
        setError(values => {
            const stateObj = {...values, [name]: ""};

            switch (name) {
                case "newPassword":
                    if (!value) {
                        stateObj[name] = "Please enter Password.";
                    } else if (inputs.confirmPassword && value !== inputs.confirmPassword) {
                        stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
                    } else {
                        stateObj["confirmPassword"] = inputs.confirmPassword ? "" : error.confirmPassword;
                    }
                    break;

                case "confirmPassword":
                    if (!value) {
                        stateObj[name] = "Please enter Confirm Password.";
                    } else if (inputs.newPassword && value !== inputs.newPassword) {
                        stateObj[name] = "Password and Confirm Password does not match.";
                    }
                    break;

                default:
                    break;
            }

            return stateObj;
        });
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        await api.put(`/users/${id}`, inputs)
            .then((res) => {
                if (res.data.code === 'UserUpdated') {
                    redirect('/');
                }
            }).catch((error) => {

                // Errors
                if (error.response.data.code) {
                    MySwal.fire({
                        confirmButtonColor: "#0d6efd",
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
            <Form.Group as={Col} md="6" controlId="validationCustomEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={inputs.email ?? ''}
                    onChange={handleChange}
                    onBlur={validateInput}
                    isValid={!error.email && inputs.email}
                    isInvalid={error.email}
                    placeholder="Email"
                    required
                />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustomName">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={inputs.name ?? ''}
                    onChange={handleChange}
                    onBlur={validateInput}
                    isValid={!error.name && inputs.name}
                    isInvalid={error.name}
                    placeholder="Nome"
                    required
                />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustomPhone">
                <Form.Label>Telemóvel</Form.Label>
                <Form.Control
                    type="text"
                    name="phone"
                    value={inputs.phone ?? ''}
                    onChange={handleChange}
                    onBlur={validateInput}
                    isValid={!error.phone && inputs.phone}
                    isInvalid={error.phone}
                    placeholder="Telemóvel"
                    required
                />
            </Form.Group>

            {user.isAdmin ? (
                <Form.Group as={Col} md="6">
                    <Form.Label>Tipo de utilizador</Form.Label>
                    <Form.Select name="user_type_id" defaultValue="1" value={inputs.user_type_id}
                                 onChange={handleChange}>
                        {userTypes.map((usertype, key) => {
                            return (
                                <option key={key} value={usertype.id}>{usertype.name}</option>
                            )
                        })}
                    </Form.Select>
                </Form.Group>
            ) : ''
            }
            <p></p>
            <Row className="mb-3">
                <h3>Alterar Password</h3>
                <Form.Group as={Col} md="8" controlId="validationCustomPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        onChange={handleChange}
                        isInvalid={error.password && inputs.password !== ""}
                        placeholder="Password"
                    />
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustomNewPassword">
                    <Form.Label>Nova Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="newPassword"
                        onChange={handleChange}
                        onBlur={validateInput}
                        isInvalid={error.newPassword}
                        placeholder="Nova Password"
                    />
                </Form.Group>


                <Form.Group as={Col} md="6" controlId="validationCustomConfirmPassword">
                    <Form.Label>Confirme a Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="confirmPassword"
                        onChange={handleChange}
                        onBlur={validateInput}
                        isInvalid={error.confirmPassword}
                        placeholder="Confirme a Password"
                    />
                </Form.Group>
            </Row>
            <Button type="submit">Guardar</Button>
        </Form>
    );
}