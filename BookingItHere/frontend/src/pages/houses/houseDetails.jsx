import React, {useEffect, useState} from 'react';
import {useParams, useNavigate, useSearchParams} from 'react-router-dom';
import axios from 'axios';
import {Carousel} from 'react-responsive-carousel';
import Swal from 'sweetalert2';
import {api} from "../../services/api";

/**
 * @author Luís Anjo
 * @returns {JSX.Element}
 * @constructor
 */
export default function HouseDetails() {
    const [inputs, setInputs] = useState({services: []});
    const [house, setHouse] = useState(null);
    const [services, setServices] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        if (name === "guestsNumber" && (isNaN(value) || value > house.guestsNumber)) {
            Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Número de convidados excede o limite permitido pela casa.',
            });
            return;
        }

        setInputs((values) => ({...values, [name]: value}));

        if (name === "services") {
            const selectedServices = Array.from(event.target.selectedOptions, (option) => option.value);
            setServices(selectedServices);
            setInputs((values) => ({...values, services: selectedServices}));
        }
    };

    useEffect(() => {
        const fetchHouse = async () => {
            try {
                const response = await api.get(`/houses/${id}`);

                if (parseInt(searchParams.get('click')) === 1 && response.data.data.Announcements[0].id) {
                    try {
                        await api.put(`/announcements/${response.data.data.Announcements[0].id}/clicks`);
                    } catch (e) {

                    }
                }
                setHouse(response.data.data);
            } catch (error) {

            }
        };

        fetchHouse();
    }, [id, searchParams]);

    const handleReservation = async (event) => {
        event.preventDefault();
        try {
            const requestData = {
                house_id: id,
                init_date: inputs.init_date,
                end_date: inputs.end_date,
                guestsNumber: inputs.guestsNumber,
                services: services.map((serviceName) => ({name: serviceName})),
            };
            console.log(requestData);
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/reservation`,
                requestData,
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });

            // Redirecionar para a página de reservas com a reserva recém-criada
            navigate(`/houses/${id}/reservation/${response.data.data.id}`);
        } catch (error) {
            console.log(error);
        }
    };

    if (!house) {
        return <div>Loading...</div>;
    }

    return (
        <div className="house-details">

            <h1 className="my-4">{house.name}
            </h1>
            <div className="row">

                <div className="col-md-8">
                    {house.imageUrls.length > 1 ? (
                        <Carousel showThumbs={false}>
                            {house.imageUrls.map((imageUrl, index) => (
                                <div key={index}>
                                    <img className="img-fluid" src={imageUrl} style={{width: "500px", height: "350px"}}
                                         alt=""/>
                                </div>
                            ))}
                        </Carousel>
                    ) : (
                        <img className="img-fluid" src={house.imageUrls[0]} style={{width: "500px", height: "350px"}}
                             alt=""/>
                    )}
                    <h4 className="my-3">Serviços Adicionais</h4>
                    <ul>
                        {house.Services.map(service => (
                            <li key={service.id}>{service.name} | {service.HouseServices.price}€</li>
                        ))}
                    </ul>
                </div>

                <div className="col-md-4">
                    <h3 className="my-3">Efetuar Reserva</h3>
                    <div className="additional-info">
                        <div className="info-container">
                            <form onSubmit={handleReservation}>
                                <div className="info-row">
                                    <div className="info-label">Check-in:</div>
                                    <input type="date" className="form-control" name="init_date" onChange={handleChange}
                                           required/>
                                </div>
                                <div className="info-row">
                                    <div className="info-label">Check-out:</div>
                                    <input type="date" className="form-control" name="end_date" onChange={handleChange}
                                           required/>
                                </div>
                                <div className="info-row">
                                    <div className="info-label">Nº Hóspedes:</div>
                                    <input type="number" className="form-control" name="guestsNumber"
                                           onChange={handleChange} required/>
                                </div>

                                <div className="info-label" style={{marginTop: '5px'}}>Serviços:</div>
                                <select className="form-select" aria-label="Default select example" multiple
                                        value={services} onChange={handleChange} name="services">
                                    <option selected>Sem serviços</option>
                                    {house.Services.map((service) => (
                                        <option key={service.id} value={service.name}>
                                            {service.name}
                                        </option>
                                    ))}
                                </select>

                                <div className="info-row">
                                    <button className="reserve-button" style={{marginTop: '20px'}}>Reservar</button>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>

            </div>
            <div className="row">
                <hr style={{borderTop: "1px solid black"}}/>
                <h4 className="my-3">Descrição da Casa</h4>
                <div className="col-md-6">
                    <p><strong>Preço Noite:</strong> {house.price}€</p>
                    <p><strong>Nº Max Pessoas:</strong> {house.guestsNumber}</p>
                    <p><strong>Andar:</strong> {house.floorNumber}</p>
                    <p><strong>Proprietário:</strong> {house.User.name}</p>
                </div>
                <div className="col-md-4">
                    <p><strong>Rua:</strong> {house.road}, {house.doorNumber}</p>
                    <p><strong>Codigo Postal:</strong> {house.postalCode}</p>
                    <p><strong>Concelho:</strong> {house.PostalCode.concelho}</p>
                    <p><strong>Distrito:</strong> {house.PostalCode.district}</p>
                </div>
            </div>
            <div className="row">
                <hr style={{borderTop: "1px solid black"}}/>
                <h4 className="my-3">Feedbacks</h4>
                {house.Reservations.filter((reservation) => reservation.Feedback).map((reservation) => ( //Reservas que têm feedback
                    <div className="container">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img
                                            src="https://images.macrumors.com/t/XjzsIpBxeGphVqiWDqCzjDgY4Ck=/800x0/article-new/2019/04/guest-user-250x250.jpg?lossy"
                                            className="img img-rounded img-fluid"/>
                                        <p className="text-secondary text-center">{new Date(reservation.Feedback.updatedAt).toLocaleDateString('pt-PT')}</p>
                                    </div>
                                    <div className="col-md-10">
                                        <p>
                                            <div className="col-md-4">
                                                <span
                                                    className="float-left"><strong>Nome:</strong> {reservation.User.name}</span>
                                            </div>

                                            <p>
                                                <strong>Classificação: </strong> {[...Array(reservation.Feedback.classification)].map((_, index) => (
                                                <span key={index} className="text-warning fa fa-star"></span>
                                            ))}</p>
                                            <p><strong>Comentário: </strong> {reservation.Feedback.comment}</p>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};
