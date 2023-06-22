import React, {useContext} from "react";
import {AuthContext} from "../middleware/auth";
import "../pages/admin/admin.css";


/**
 * Header component
 *
 * @author João Ponte
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Header() {
    const {user, authenticated, logout} = useContext(AuthContext);
    const handleLogout = async e => {
        e.preventDefault();
        await logout();
    }

    return (
        <header className="p-3 text-white">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src="/logo.png" className="card-img-top" style={{width: "auto", height: "150px"}}/>
                    </a>
                    <button className="navbar-toggler collapsed" type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarResponsive" aria-controls="navbarResponsive"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                            {user && user.perms > 1 ? (
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="dropdown03"
                                           data-bs-toggle="dropdown" aria-expanded="false">Gestão de Alojamentos</a>
                                        <ul className="dropdown-menu" aria-labelledby="dropdown03">
                                            <li><a className="dropdown-item"
                                                   href={`/users/${user.id}/houses`}>Alojamentos</a></li>
                                            <li><a className="dropdown-item" href="/houses/new">Criar Novo</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item"
                                                   href={`/users/${user.id}/houses/reservation`}>Reservas</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="/services/new">Criar serviço</a></li>
                                        </ul>
                                    </li>)
                                : ''}

                            {user && user.isAdmin ? (
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle text-danger" href="#" id="dropdown03"
                                           data-bs-toggle="dropdown" aria-expanded="false">Admin</a>
                                        <ul className="dropdown-menu" aria-labelledby="dropdown03">
                                            <li><a className="dropdown-item" href="/admin/users">Utilizadores</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="/admin/houses">Alojamentos</a></li>
                                            <li><a className="dropdown-item" href="/admin/suspendedhouses">Aprovar</a></li>
                                            <li><a className="dropdown-item" href="/admin/houses/new">Criar</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="/admin/reservation">Reservas</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="/admin/announcements">Anúncios</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="/admin/services">Serviços</a></li>
                                            <li><a className="dropdown-item" href="/admin/suspendedServices">Aprovar</a>
                                            </li>
                                            <li><a className="dropdown-item" href="/services/new">Criar</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="/admin/feedbacks">Feedbacks</a></li>
                                        </ul>
                                    </li>)
                                : ''}
                        </ul>


                        {authenticated && user.id ? (
                                <div className="dropdown text-lg-end">
                                    <a href="#" className="d-lg-block link-dark text-decoration-none dropdown-toggle"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa fa-user"></i> {user.name}
                                    </a>
                                    <ul className="dropdown-menu text-small">
                                        <li><a className="dropdown-item" href={`/users/${user.id}`}>Perfil</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item" href={`/users/${user.id}/reservation`}>Minhas
                                            reservas</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item" href="#" onClick={handleLogout}>Sair</a></li>
                                    </ul>
                                </div>)
                            :
                            (
                                <ul className="navbar-nav ms-auto py-4 py-lg-0">
                                    <li><a className="nav-link px-lg-3 py-3 py-lg-4"
                                           href="/login">
                                        <i className="fa fa-user"></i> Login
                                    </a></li>
                                </ul>
                            )}
                    </div>
                </div>
            </nav>
        </header>
    );
}