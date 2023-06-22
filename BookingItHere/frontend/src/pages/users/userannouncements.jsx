import React, {useEffect, useState} from 'react';
import axios from 'axios';

/**
 * @author Diogo
 * @returns {JSX.Element}
 * @constructor
 */
export default function ListUserAnnouncements() {
    const [announcements, setAnnouncements] = useState([])

    const [headers] = useState({'Authorization': `Bearer ${localStorage.getItem('token')}`});

    const userId = localStorage.getItem('token');

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [updateTable, setUpdateTable] = useState(false);
    const recordsPerPage = 20; // Número de registros por página

    useEffect(() => {
        const getUsersAnnouncement = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}/announcements`, {headers});
                const allAnnouncements = response.data.data;
                const totalPages = Math.ceil(allAnnouncements.length / recordsPerPage);
                setTotalPages(totalPages);

                const startIndex = (currentPage - 1) * recordsPerPage;
                const endIndex = startIndex + recordsPerPage;
                const announcementsPerPage = allAnnouncements.slice(startIndex, endIndex);

                setAnnouncements(announcementsPerPage);
            } catch (error) {
                console.log(error);
            }
        };

        getUsersAnnouncement();

        if (updateTable) {
            setUpdateTable(false);
        }
    }, [currentPage, headers, updateTable]);

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
                        <th>ID</th>
                        <th>IDcasa</th>
                        <th>PreçoClick</th>
                        <th>NumClicks</th>
                        <th>Estado</th>
                        <th>DataFinal</th>
                    </tr>
                    </thead>
                    <tbody>
                    {announcements.map((announcement, key) => {
                        return (
                            <tr key={key}>
                                <td>{announcement.id}</td>
                                <td>{announcement.house_id}</td>
                                <td>{announcement.priceClick}</td>
                                <td>{announcement.numbClicks}</td>
                                <td>{announcement.state}</td>
                                <td>{new Date(announcement.end_date).toLocaleDateString('pt-PT')}</td>
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