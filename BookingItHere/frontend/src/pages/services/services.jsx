import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

/**
 * @author Pedro Martins
 * @returns {JSX.Element}
 * @constructor
 */
export default function ListServices() {

    const [services, setServices] = useState([])
    const [headers] = useState({'Authorization': `Bearer ${localStorage.getItem('token')}`});
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [updateTable, setUpdateTable] = useState(false);
    const navigate = useNavigate();
    const recordsPerPage = 20; // Número de registros por página

    useEffect(() => {
        const getAllServices = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/services`, {headers});
                const allServices = response.data.data;
                const totalPages = Math.ceil(allServices.length / recordsPerPage);
                setTotalPages(totalPages);

                const startIndex = (currentPage - 1) * recordsPerPage;
                const endIndex = startIndex + recordsPerPage;
                const servicesPerPage = allServices.slice(startIndex, endIndex);

                setServices(servicesPerPage);
            } catch (error) {
                console.log(error);
            }
        };

        getAllServices();

        if (updateTable) {
            setUpdateTable(false);
            setUpdateTable(false);
        }
    }, [currentPage, headers, updateTable]);


    const handlePageChange = (page) => {
        setCurrentPage(page);
        setUpdateTable(false);
    };

    const updateServiceState = async (serviceId) => {
        try {
            const response = await axios.put(
                `${process.env.REACT_APP_API_URL}/services/${serviceId}/state/0`,
                {},
                {headers}
            );
            setUpdateTable(true);
        } catch (error) {
            console.log(error);
        }
    };

    const removeService = async (serviceId) => {
        try {
            const response = await axios.delete(
                `${process.env.REACT_APP_API_URL}/services/${serviceId}`,
                {},
                {headers}
            );
            setUpdateTable(true);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>

            <div className="wrapper-houses">
                <div className="table-responsive" style={{overflowX: 'scroll', overflowY: 'hidden'}}>
                    <table className="table text-center">
                        <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Ações</th>
                        </tr>
                        </thead>
                        <tbody>
                        {services.map((service, key) => {
                            return (
                                <tr key={key}>
                                    <td>{service.id}</td>
                                    <td>{service.name}</td>
                                    <td>
                                        <button onClick={() => navigate(`/admin/services/${service.id}`)}><i
                                            className="fa fa-pencil"></i></button>
                                        <button onClick={() => updateServiceState(service.id)}><i
                                            className="fa fa-times"></i></button>
                                        <button onClick={() => removeService(service.id)}><i
                                            className="fa fa-trash"></i></button>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous
                            </button>
                        </li>

                        {[...Array(totalPages)].map((_, index) => (
                            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                <button className="page-link"
                                        onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
                            </li>
                        ))}

                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}