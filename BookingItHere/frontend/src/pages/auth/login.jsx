import React, {useState, useContext} from 'react';
import {AuthContext} from "../../middleware/auth";
import "./style.css"

/**
 * @author João Ponte
 * @returns {JSX.Element}
 * @constructor
 */
export default function Login() {
    const {login} = useContext(AuthContext);
    const [inputs, setInputs] = useState([])

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        login(inputs.email, inputs.password);
    }

    return (
        <form data-bitwarden-watching="1" className="form-signin" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 fw-normal">Login</h1>

            <div className="form-floating">
                <input type="email" name="email" className="form-control" id="floatingInput"
                       placeholder="name@example.com"
                       onChange={handleChange} required/>
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" name="password" className="form-control" id="floatingPassword"
                       placeholder="Password"
                       onChange={handleChange} required/>
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
            <a href="/forget" className="w-100 btn btn-lg btn-outline-secondary mt-2">Recuperar Password</a>
            <a href="/users/new" className="w-100 btn btn-lg btn-outline-primary mt-2">Registar</a>
            <p className="pt-5"></p>
        </form>
    );
}