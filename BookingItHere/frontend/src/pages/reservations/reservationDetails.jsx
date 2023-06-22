import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {Carousel} from 'react-responsive-carousel';

/**
 * @author Luís Anjo
 * @returns {JSX.Element}
 * @constructor
 */
export default function HouseDetails() {
    const [reservation, setReservation] = useState(null);
    const [payments, setPayments] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchReservation = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/reservation/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                const responsee = await axios.get(`${process.env.REACT_APP_API_URL}/payments/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setReservation(response.data.data);
                setPayments(responsee.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchReservation();
    }, [id]);

    const handlePayment = async () => {
        try {
            navigate(`/houses/${reservation.house_id}/reservation/${reservation.id}/payment/${reservation.id}`);
        } catch (error) {
            console.log(error);
        }
    };

    if (!reservation) {
        return <div>Loading...</div>;
    }

    return (
        <div className="reservation-details">
            <h1 className="my-4"></h1>
            <div className="col-md-8">
                {reservation.House.imageUrls.length > 1 ? (
                    <Carousel showThumbs={false}>
                        {reservation.House.imageUrls.map((imageUrl, index) => (
                            <div key={index}>
                                <img className="img-fluid" src={imageUrl} style={{width: "500px", height: "350px"}}
                                     alt=""/>
                            </div>
                        ))}
                    </Carousel>
                ) : (
                    <img className="img-fluid" src={reservation.House.imageUrls[0]}
                         style={{width: "500px", height: "350px"}} alt=""/>
                )}
            </div>
            <h1 className="my-5"></h1>
            <p><strong>Data Check-In:</strong> {new Date(reservation.init_date).toLocaleDateString('pt-PT')}</p>
            <p><strong>Data Check-In:</strong> {new Date(reservation.end_date).toLocaleDateString('pt-PT')}</p>
            <p><strong>Nº Pessoas:</strong> {reservation.guestsNumber}</p>
            <p><strong>Estado Reserva:</strong> {reservation.ReservationState.state}</p>
            <p><strong>Preço Reserva:</strong> {payments.paymentValue}€</p>
            <button className="btn btn-primary btn-lg btn-block" onClick={handlePayment}>Ir para o Pagamento</button>
        </div>
    );
};

