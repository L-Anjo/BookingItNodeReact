import React, {useContext, useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import './edits.css';
import Swal from 'sweetalert2';
import {AuthContext} from "../../middleware/auth";

/**
 * @author Luís Anjo
 * @returns {JSX.Element}
 * @constructor
 */
export default function CreatePayment() {
    const [inputs, setInputs] = useState({});
    const [payments, setPayment] = useState({});
    const [house, setHouse] = useState({});
    const [reservation, setReservation] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState('Cartão Multibanco');
    const navigate = useNavigate();
    const {id} = useParams();
    const {user} = useContext(AuthContext);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        if (name === "firstname" && !/^[a-zA-Z]+$/.test(value)) {
            Swal.fire({
                icon: 'warning',
                title: 'Aviso',
                text: 'O campo Primeiro Nome deve conter apenas letras.',
            });
            return;
        }

        if (name === "lastname" && !/^[a-zA-Z]+$/.test(value)) {
            Swal.fire({
                icon: 'warning',
                title: 'Aviso',
                text: 'O campo Ultimo Nome deve conter apenas letras',
            });
            return;
        }

        if (name === 'email' && !value) {
            Swal.fire({
                icon: 'warning',
                title: 'Aviso',
                text: 'Por favor, preencha o campo E-mail.',
            });
            return;
        }

        if (name === "namecard" && !/^[a-zA-Z]+$/.test(value)) {
            Swal.fire({
                icon: 'warning',
                title: 'Aviso',
                text: 'O campo Nome do cartão deve conter apenas letras',
            });
            return;
        }

        if (name === "namecredit" && !/^\d+$/.test(value)) {
            Swal.fire({
                icon: 'warning',
                title: 'Aviso',
                text: 'Por favor, preencha o campo Número do cartão de crédito.',
            });
            return;
        }

        if (name === "expiration" && !value) {
            Swal.fire({
                icon: 'warning',
                title: 'Aviso',
                text: 'Por favor, preencha o campo Data de validade.',
            });
            return;
        }

        if (name === "cvv" && !/^\d+$/.test(value)) {
            Swal.fire({
                icon: 'warning',
                title: 'Aviso',
                text: 'Por favor, preencha o campo CVV só com numeros.',
            });
            return;
        }

        setInputs(values => ({...values, [name]: value}))
    }
    useEffect(() => {
        const fetchPayment = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/payments/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setPayment(response.data.data);
                setReservation(response.data.data.Reservation);
                calculateTotalPrice(response.data.data.Reservation.Services);

                const responsee = await axios.get(`${process.env.REACT_APP_API_URL}/houses/${response.data.data.Reservation.house_id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setHouse(responsee.data.data);

            } catch (error) {
                console.log(error);
            }
        };
        fetchPayment();
    }, [id]);


    const calculateTotalPrice = (services) => {
        let total = 0;
        services.forEach(service => {
            total += service.ReservationServices.price;
        });
        setTotalPrice(total);
    };

    const handleChangePaymentMethod = (event) => {
        setPaymentMethod(event.target.value);
    };

    const initDate = new Date(reservation.init_date);
    const endDate = new Date(reservation.end_date);
    const timeDifference = endDate.getTime() - initDate.getTime();
    const numberOfDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 19).replace("T", " ");

    const handlePayment = async (event) => {
        event.preventDefault();
        try {
            const requestData = {
                reservation_id: reservation.id,
                state_id: 2,
                paymentMethod: paymentMethod,
                paymentDate: new Date()
            };

            const response = await axios.put(`${process.env.REACT_APP_API_URL}/payments/${payments.id}`,
                requestData,
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            console.log(requestData)
            // Redirecionar para a página de reservas com a reserva recém-criada
            navigate(`/users/${user.id}/reservation`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container">
            <h2>Pagamento</h2>
            <div className="row">
                <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Detalhes da Reserva</span>
                        <span className="badge badge-secondary badge-pill">3</span>
                    </h4>
                    <ul className="list-group mb-3">
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Nº de Noites</h6>
                                <small className="text-muted">{numberOfDays}</small>
                            </div>
                            <span className="text-muted">{payments.paymentValue - totalPrice}€</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Serviços</h6>
                                <div>
                                    {reservation.Services && reservation.Services.map(service => (
                                        <div key={service.id}>
                                            <small className="text-muted">{service.name}</small>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <span className="text-muted">{totalPrice}€</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total</span>
                            <strong>{payments.paymentValue}€</strong>
                        </li>
                    </ul>

                </div>
                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Endereço Faturação</h4>
                    <form onSubmit={handlePayment}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label>Primeiro Nome</label>
                                <input type="text" className="form-control" name="firstname" onChange={handleChange}
                                       required/>
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Ultimo Nome</label>
                                <input type="text" className="form-control" name="lastname" onChange={handleChange}
                                       required/>
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label>Email <span className="text-muted"></span></label>
                            <input type="text" className="form-control" name="email" onChange={handleChange} required/>
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>
                        <h4 className="mb-3">Payment</h4>
                        <div className="d-block my-3">
                            <div className="form-group">
                                <div className="custom-control custom-radio">
                                    <label for="exampleFormControlSelect1">Método Pagamento</label>
                                    <select className="form-control" name="paymentMethod"
                                            onChange={handleChangePaymentMethod} defaultValue="Cartão Multibanco">
                                        <option value="Cartão Multibanco">Cartão Multibanco</option>
                                        <option value="Paypal">Paypal</option>
                                    </select>
                                </div>
                            </div>
                            {paymentMethod === 'Paypal' ? (
                                <div className="custom-control custom-radio">
                                    <label className="custom-control-label">Email Paypal</label>
                                    <input type="text" className="form-control" onChange={handleChange} required/>
                                </div>
                            ) : (
                                <div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label>Nome do Cartão</label>
                                            <input type="text" className="form-control" name="namecard"
                                                   onChange={handleChange} required/>
                                            <small className="text-muted">Nome Completo Cartão</small>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label>Nº do Cartão</label>
                                            <input type="text" className="form-control" name="namecredit"
                                                   onChange={handleChange} required/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3 mb-3">
                                            <label>Data Validade</label>
                                            <input type="text" className="form-control" name="expiration"
                                                   onChange={handleChange} required/>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label>CVV</label>
                                            <input type="text" className="form-control" name="cvv"
                                                   onChange={handleChange} required/>
                                            <div className="invalid-feedback">
                                                Security code required
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <button className="btn btn-primary btn-lg btn-block">Pagar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}