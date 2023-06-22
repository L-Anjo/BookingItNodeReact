import React, {useEffect, useState} from 'react';
import axios from 'axios';

/**
 * @author Diogo
 * @returns {JSX.Element}
 * @constructor
 */
export default function ListSuspendedReservations() {
    const [suspendedReservations, setSuspendedReservations] = useState([]);
    const [headers] = useState({'Authorization': `Bearer ${localStorage.getItem('token')}`});
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [updateTable, setUpdateTable] = useState(false);

    const recordsPerPage = 20; // Número de registros por página

    useEffect(() => {
        const getAllReservations = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/reservation`, {headers});
                const allReservations = response.data.data;
                console.log(response.data.data);
                const suspendedReservations = allReservations.filter(reservation => reservation.state_id === 1);
                console.log(suspendedReservations);
                setSuspendedReservations(suspendedReservations);

                const totalPages = Math.ceil(suspendedReservations.length / recordsPerPage);
                setTotalPages(totalPages);

                const startIndex = (currentPage - 1) * recordsPerPage;
                const endIndex = startIndex + recordsPerPage;
                const reservationsPerPage = suspendedReservations.slice(startIndex, endIndex);
                setSuspendedReservations(reservationsPerPage);
            } catch (error) {
                console.log(error);
            }
        };

        getAllReservations();

        if (updateTable) {
            setUpdateTable(false);
        }
    }, [currentPage, headers, updateTable]);

    const updateReservationState = async (reservationId) => {
        try {
            const response = await axios.put(
                `${process.env.REACT_APP_API_URL}/reservation/${reservationId}/status/2`,
                {},
                {headers}
            );
            setUpdateTable(true);
        } catch (error) {
            console.log(error);
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setUpdateTable(false);
    };

    return (
        <div className="wrapper-houses">
            <div className="table-responsive" style={{overflowX: 'scroll', overflowY: 'hidden'}}>
                <table className="table text-center">
                    <thead className="table-dark">
                    <tr>
                        <td>ID</td>
                        <td>Check-in</td>
                        <td>Check-out</td>
                        <td>Estado</td>
                        <td>Ações</td>
                    </tr>
                    </thead>
                    <tbody>
                    {suspendedReservations.map((reservation, key) => {
                        return (
                            <tr key={key}>
                                <td>{reservation.id}</td>
                                <td>{new Date(reservation.init_date).toLocaleDateString('pt-PT')}</td>
                                <td>{new Date(reservation.end_date).toLocaleDateString('pt-PT')}</td>
                                <td>{reservation.ReservationState.state}</td>
                                <td>
                                    <button onClick={() => updateReservationState(reservation.id)}>Aprovar</button>
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
                        <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}