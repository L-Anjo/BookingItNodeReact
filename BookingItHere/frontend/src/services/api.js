import axios from "axios";

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: localStorage.getItem('token') ? {
        auth: {
            username: process.env.HTTP_HEADER_USERNAME,
            password: process.env.HTTP_HEADER_PASSWORD
        },
        Authorization: `Bearer ${localStorage.getItem('token')}`
    } : {}
});

export const createSession = async (email, password) => {
    return api.post('/auth/login', {
        email,
        password
    });
};