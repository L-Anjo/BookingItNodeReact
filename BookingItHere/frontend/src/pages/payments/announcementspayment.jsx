import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import './edits.css';

/**
 * @author Diogo
 * @returns {JSX.Element}
 * @constructor
 */
export default function CreateAnnouncementPayment() {
    const [inputs, setInputs] = useState({});
    const [payments, setPayment] = useState({});
    const [announcement, setAnnouncement] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    useEffect(() => {
        const fetchPayment = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/announcementPayments/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setPayment(response.data.data);
                //setAnnouncement(response.data.data.Announcement);
                //calculateTotalPrice(response.data.data.Reservation.Services);

                const responsee = await axios.get(`${process.env.REACT_APP_API_URL}/announcements/${response.data.data.Announcement.id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setAnnouncement(responsee.data.data);

            } catch (error) {
                console.log(error);
            }
        };
        fetchPayment();
    }, [id]);


//  const calculateTotalPrice = (services) => {
//    let total = 0;
//    services.forEach(service => {
//      total += service.ReservationServices.price;
//    });
//    setTotalPrice(total);
//  };

    const handleChangePaymentMethod = (event) => {
        setPaymentMethod(event.target.value);
    };

    //const initDate = new Date(reservation.init_date);
    const endDate = new Date(announcement.end_date);
    const currentDate = new Date();
    const timeDifference = endDate.getTime() - currentDate.getTime();
    const numberOfDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
    const formattedDate = currentDate.toISOString().slice(0, 19).replace("T", " ");

    const handlePayment = async () => {
        try {
            const requestData = {
                announcement: announcement.id,
                status: 1,
                paymentMethod: paymentMethod,
                paymentDate: new Date()
            };
            console.log(requestData)
            console.log(payments.id)
            const response = await axios.put(`${process.env.REACT_APP_API_URL}/announcementPayments/${payments.id}`,
                requestData,
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            console.log(requestData)
            // Redirecionar para a página de reservas com a reserva recém-criada
            navigate(`/users/${id}/announcements`);
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
                        <span className="text-muted">Detalhes de Pagamento</span>
                        <span className="badge badge-secondary badge-pill">3</span>
                    </h4>
                    <ul className="list-group mb-3">
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Nº de Dias</h6>
                                <small className="text-muted">{numberOfDays}</small>
                            </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <h6 className="my-0">Nº de Clicks</h6>
                            <span className="text-muted">{announcement.numbClicks}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <h6 className="my-0">Preço por Click</h6>
                            <span className="text-muted">{announcement.priceClick}€</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total</span>
                            <strong>{payments.paymentValue}€</strong>
                        </li>
                    </ul>

                </div>
                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Endereço Faturação</h4>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label>Primeiro Nome</label>
                            <input type="text" className="form-control" name="firstname" onChange={handleChange}/>
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Ultimo Nome</label>
                            <input type="text" className="form-control" name="lastname" onChange={handleChange}/>
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label>Email <span className="text-muted"></span></label>
                        <input type="text" className="form-control" name="email" onChange={handleChange}/>
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
                                <input type="text" className="form-control" onChange={handleChange}/>
                            </div>
                        ) : (
                            <div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label>Name on card</label>
                                        <input type="text" className="form-control" name="namecard"
                                               onChange={handleChange} required/>
                                        <small className="text-muted">Full name as displayed on card</small>
                                        <div className="invalid-feedback">
                                            Name on card is required
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label>Credit card number</label>
                                        <input type="text" className="form-control" name="namecredit"
                                               onChange={handleChange} required/>
                                        <div className="invalid-feedback">
                                            Credit card number is required
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 mb-3">
                                        <label>Expiration</label>
                                        <input type="text" className="form-control" name="expiration"
                                               onChange={handleChange} required/>
                                        <div className="invalid-feedback">
                                            Expiration date required
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label>CVV</label>
                                        <input type="text" className="form-control" name="cvv" onChange={handleChange}
                                               required/>
                                        <div className="invalid-feedback">
                                            Security code required
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <button className="btn btn-primary btn-lg btn-block" onClick={handlePayment}>Pagar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}