import React, {useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

/**
 * @author Diogo
 * @returns {JSX.Element}
 * @constructor
 */
export default function CreateAnnouncement() {
    const [announcement, setAnnouncement] = useState({});
    const [inputs, setInputs] = useState([])
    const navigate = useNavigate();
    const {id} = useParams();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const requestData = {
                house_id: id,
                priceClick: inputs.priceClick,
                numbClicks: inputs.numbClicks,
                end_date: inputs.end_date,
            };

            const response = await axios.post(`${process.env.REACT_APP_API_URL}/announcements`, requestData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });

            setAnnouncement(response.data.data);
            navigate(`/houses/${id}/announcement/${response.data.data.id}/announcementPayment/${response.data.data.id}`);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="wrapper">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Preço por Click</label>
                    <input type="number" step="0.1" min="0" max="1000" className="form-control" name="priceClick"
                           onChange={handleChange} required/>
                </div>
                <div className="form-group">
                    <label>Número de clicks </label>
                    <input type="number" className="form-control" name="numbClicks" onChange={handleChange} required/>
                </div>
                <div className="form-group">
                    <label>Data de Fim do Anúncio</label>
                    <input type="date" className="form-control" name="end_date" onChange={handleChange} required/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Register" className="btn btn-success btn-block"/>
                </div>
            </form>
        </div>
    );
}