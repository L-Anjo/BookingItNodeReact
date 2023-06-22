import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

/**
 * @author Pedro Martins
 * @returns {JSX.Element}
 */
export default function CreateService() {
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInputs((values) => ({...values, [name]: value}));
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/services`,
                inputs,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className="wrapper">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Nome do serviço</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            onChange={handleChange}
                            required
                        />
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
        </div>
    );
}