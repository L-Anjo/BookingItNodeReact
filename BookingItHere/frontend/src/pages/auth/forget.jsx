import React, {useState} from 'react';
import "./style.css"
import {api} from "../../services/api";

/**
 * @author João Ponte
 * @returns {JSX.Element}
 * @constructor
 */
export default function Forget() {
    const [inputs, setInputs] = useState([])
    const [success, setSuccess] = useState(false)

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/auth/forget', {
                email: inputs.email
            })

            inputs.email = ''
            setSuccess(true);
        } catch (e) {

        }
    }

    return (
        <form data-bitwarden-watching="1" className="form-signin" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 fw-normal">Recuperar Password</h1>

            <div className="form-floating">
                <input type="email" name="email" className="form-control" id="floatingInput"
                       placeholder="name@example.com"
                       value={inputs.email}
                       onChange={handleChange} required/>
                <label htmlFor="floatingInput">Email address</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Recuperar</button>
            {success ?
                (
                    <p className="text-success pt-5">Foi enviado um email para a sua caixa de correio!</p>
                )
                :
                (
                    <p className="pt-5"></p>
                )}
        </form>
    );
}