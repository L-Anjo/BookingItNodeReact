import React, {useEffect, useState, useContext} from 'react';
import {useNavigate, useParams} from "react-router-dom"
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {api} from "../../services/api";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import {AuthContext} from "../../middleware/auth";

/**
 * @author João Ponte
 * @returns {JSX.Element}
 * @constructor
 */
export default function CreateUser() {
    const [inputs, setInputs] = useState({
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState({
        password: '',
        confirmPassword: ''
    });
    const [userTypes, setuserTypes] = useState([]);
    const redirect = useNavigate();
    const {id} = useParams();
    const MySwal = withReactContent(Swal)
    const {user} = useContext(AuthContext);

    useEffect(() => {
        if (!(user && user.isAdmin)) {
            return;
        }
        getAllUserTypes();
    }, []);

    const getAllUserTypes = async () => {
        await api.get(`/usertypes`)
            .then(res => {
                setuserTypes(res.data.usertypes)
            })
            .catch(function (error) {
                console.log(error);
            });
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
                case "password":
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
                    } else if (inputs.password && value !== inputs.password) {
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
        await api.post(`/users`, inputs)
            .then((res) => {
                if (res.status === 201 && user && user.isAdmin) {
                    redirect('/users');
                } else {
                    redirect('/');
                }
                redirect('/login');

            }).catch((error) => {
                if(error.response !== undefined) {
                    // Errors
                    if (error.response.data.code === 'EmailAlreadyRegisted') {
                        MySwal.fire({
                            confirmButtonColor: "#0d6efd",
                            title: 'Email já registado!'
                        });
                    }

                    if (error.response.data.errors !== '') {
                        error.response.data.errors.map((error, key) => {
                            setError(values => ({
                                ...values,
                                [error.param]: error.msg
                            }));
                        })
                    }
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

            <Form.Group as={Col} md="6" controlId="validationCustomPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={validateInput}
                    isInvalid={error.password}
                    placeholder="Password"
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

            {user && user.isAdmin ? (
                <Form.Group>
                    <Form.Label>Tipo de utilizador</Form.Label>
                    <Form.Select name="user_type_id">
                        {userTypes.map((usertype, key) => {
                            return (
                                <option key={key} value={usertype.id}>{usertype.name}</option>
                            )
                        })}
                    </Form.Select>
                </Form.Group>) : ''
            }
            <Button type="submit" className="mt-2">Registar</Button>
        </Form>
    );
}