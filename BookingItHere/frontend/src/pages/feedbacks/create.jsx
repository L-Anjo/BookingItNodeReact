import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import {useParams} from 'react-router-dom';

/**
 * @author Pedro Martins
 * @returns {JSX.Element}
 * @constructor
 */
export default function CreateFeedback() {
    const [inputs, setInputs] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/reservation/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            const responsee = await axios.post(
                `${process.env.REACT_APP_API_URL}/feedbacks`,
                {
                    reservation: id,
                    classification: inputs.classification,
                    comment: inputs.comment,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );
            navigate(`/users/${response.data.data.user_id}/reservation`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Classificação</label>
                    <input type="number" className="form-control" name="classification" onChange={handleChange}
                           required/>
                </div>
                <div className="form-group">
                    <label>Comentário</label>
                    <input type="text" className="form-control" name="comment" onChange={handleChange} required/>
                </div>

                <div style={{marginTop: '10px'}}>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Criar"
                            className="btn btn-success btn-block"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}