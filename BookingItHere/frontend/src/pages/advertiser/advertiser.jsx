import React, {useContext} from 'react';
import {Link} from "react-router-dom"
import {AuthContext} from "../../middleware/auth";
import './advertiser.css';

export default function AdvertiserPage() {
    const {user} = useContext(AuthContext);

    return (
        <div>
            <div className="sidebar flex-shrink-0 p-3" style={{width: '200px'}}>
                <a href="/advertiser"
                   className="d-flex align-items-center pb-3 mb-3 text-decoration-none border-bottom">
                    <svg className="bi pe-none me-2" width="30" height="24"></svg>
                    <span className="fs-5 fw-semibold">Anunciante</span>
                </a>
                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                data-bs-toggle="collapse" data-bs-target="#casas-collapse" aria-expanded="false">
                            Casas
                        </button>
                        <div className="collapse" id="casas-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="/houses/new"
                                       className="link-body-emphasis d-inline-flex text-decoration-none rounded">Criar
                                    casa</a></li>
                                <li><Link
                                    to={`/users/${user.id}/houses`}
                                    className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                >
                                    Minhas casas
                                </Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                data-bs-toggle="collapse" data-bs-target="#service-collapse" aria-expanded="false">
                            Serviços
                        </button>
                        <div className="collapse" id="service-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="/services/new"
                                       className="link-body-emphasis d-inline-flex text-decoration-none rounded">Criar
                                    serviço</a></li>
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
                                <li><Link
                                    to={`/users/${user.id}/houses/reservation`}
                                    className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                >
                                    Reservas das minhas casas
                                </Link></li>
                            </ul>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    );
}