import React from 'react';
import {useContext} from 'react';
import {AuthContext} from "../middleware/auth";
import "../pages/admin/admin.css";

const Sidebar = () => {
    const {user} = useContext(AuthContext);
    // Conteúdo da sidebar
    return (
        <div className="sidebar flex-shrink-0 p-3" style={{width: '200px'}}>
            <a href="#" className="d-flex align-items-center pb-3 mb-3 text-decoration-none border-bottom">
                <svg className="bi pe-none me-2" width="30" height="24"></svg>
                <span className="fs-5 fw-semibold">Admin</span>
            </a>
            <ul className="list-unstyled ps-0">
                <li className="mb-1">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                            data-bs-toggle="collapse" data-bs-target="#utilizadores-collapse" aria-expanded="false">
                        Utilizadores
                    </button>
                    <div className="collapse" id="utilizadores-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="/users/new"
                                   className="link-body-emphasis d-inline-flex text-decoration-none rounded">Criar</a>
                            </li>
                            <li><a href="/admin/users"
                                   className="link-body-emphasis d-inline-flex text-decoration-none rounded">Listar</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="mb-1">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                            data-bs-toggle="collapse" data-bs-target="#casas-collapse" aria-expanded="false">
                        Casas
                    </button>
                    <div className="collapse" id="casas-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="/houses/new"
                                   className="link-body-emphasis d-inline-flex text-decoration-none rounded">Criar</a>
                            </li>
                            <li><a href="/admin/houses"
                                   className="link-body-emphasis d-inline-flex text-decoration-none rounded">Listar</a>
                            </li>
                            <li><a href="/admin/suspendedhouses"
                                   className="link-body-emphasis d-inline-flex text-decoration-none rounded">Aprovar
                                casas</a></li>
                        </ul>
                    </div>
                </li>
                <li className="mb-1">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                            data-bs-toggle="collapse" data-bs-target="#reservas-collapse" aria-expanded="false">
                        Reservas
                    </button>
                    <div className="collapse" id="reservas-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="/admin/reservation"
                                   className="link-body-emphasis d-inline-flex text-decoration-none rounded">Listar</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="mb-1">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                            data-bs-toggle="collapse" data-bs-target="#servico-collapse" aria-expanded="false">
                        Serviços
                    </button>
                    <div className="collapse" id="servico-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="/services/new"
                                   className="link-body-emphasis d-inline-flex text-decoration-none rounded">Criar</a>
                            </li>
                            <li><a href="/admin/services"
                                   className="link-body-emphasis d-inline-flex text-decoration-none rounded">Listar</a>
                            </li>
                            <li><a href="/admin/suspendedServices"
                                   className="link-body-emphasis d-inline-flex text-decoration-none rounded">Aprovar
                                Serviços</a></li>
                        </ul>
                    </div>
                </li>
                <li className="mb-1">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                            data-bs-toggle="collapse" data-bs-target="#anuncio-collapse" aria-expanded="false">
                        Anúncios
                    </button>
                    <div className="collapse" id="anuncio-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="/admin/announcements"
                                   className="link-body-emphasis d-inline-flex text-decoration-none rounded">Listar</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="mb-1">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                            data-bs-toggle="collapse" data-bs-target="#feedback-collapse" aria-expanded="false">
                        Feedbacks
                    </button>
                    <div className="collapse" id="feedback-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="/admin/feedbacks"
                                   className="link-body-emphasis d-inline-flex text-decoration-none rounded">Listar</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;