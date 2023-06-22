/**
 * @author João Ponte
 */
import React, {createContext, useState, useEffect, useMemo} from "react";
import {useNavigate} from "react-router-dom";
import {api, createSession} from "../services/api";
import Swal from "sweetalert2";

export const AuthContext = createContext();


/**
 * @author João Ponte
 *
 */
export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);
    }, []);


    const refreshToken = async () => {
        if (localStorage.getItem('token'))
            await api.get(`/auth/refresh`)
                .then(res => {
                    if (parseInt(res.status) === 200 && res.data.token) {
                        const tokenUser = res.data.token;
                        localStorage.setItem("user", JSON.stringify(res.data.user));
                        localStorage.setItem("token", tokenUser);
                        api.defaults.headers.Authorization = `Bearer ${tokenUser}`;
                    }
                })
                .catch(function (error) {
                    logout();
                });
    }

    const logout = async () => {
        try {
            await api.get('/auth/logout');
        } catch (e) {
        }
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = null;
        setUser(null);
        navigate("/login");
    };

    const login = async (email, password) => {
        try {
            const response = await createSession(email, password);

            if (response.status === 200 && response.data.user && response.data.token && response.data.user.isAdmin) {
                const loggedUser = response.data.user;
                const tokenUser = response.data.token;
                localStorage.setItem("user", JSON.stringify(loggedUser));
                localStorage.setItem("token", tokenUser);
                api.defaults.headers.Authorization = `Bearer ${tokenUser}`;
                setUser(loggedUser);
                navigate(`/admin`);
            } else if (response.status === 200 && response.data.user && response.data.token) {
                const loggedUser = response.data.user;
                const tokenUser = response.data.token;
                localStorage.setItem("user", JSON.stringify(loggedUser));
                localStorage.setItem("token", tokenUser);
                api.defaults.headers.Authorization = `Bearer ${tokenUser}`;
                setUser(loggedUser);
                navigate(`/users/${loggedUser.id}`);
            } else {
                await logout();
            }
        } catch (e) {
            Swal.fire({
                icon: 'warning',
                confirmButtonColor: "#0d6efd",
                title: 'Aviso',
                text: 'Ocorreu um erro ao fazer login!',
            });
        }
    };

    return (
        <AuthContext.Provider value={{
            authenticated:
                Boolean(user), user, loading, login, logout, refreshToken
        }}>
            {children}
        </AuthContext.Provider>
    );
}