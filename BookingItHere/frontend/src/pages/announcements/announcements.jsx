import React, {useEffect, useState} from 'react';
import {api} from "../../services/api";

/**
 * @author Diogo
 * @returns {JSX.Element}
 * @constructor
 */
export default function ListAnnouncements() {
    const [announcements, setAnnouncements] = useState([])
    const [updateTable, setUpdateTable] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const recordsPerPage = 20; // Número de registros por página

    useEffect(() => {
        const getAllAnnouncements = async () => {
            try {
                const response = await api.get(`/announcements`);
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

        getAllAnnouncements();

        if (updateTable) {
            setUpdateTable(false);
        }
    }, [currentPage, updateTable]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setUpdateTable(false);
    };

    const approveAnnouncement = async (announcementId) => {
        try {
            await api.put(`/announcements/${announcementId}/state`, null);
            // A reserva foi aprovada com sucesso, você pode atualizar o estado das reservas ou fazer outras ações necessárias.
            setUpdateTable(true);
        } catch (error) {
            console.error('Error during reservation approval', error);
            // Lida com erros, se houver algum.
        }
    };

    const deleteAnnouncement = async (announcementId) => {
        try {
            await api.delete(`/announcements/${announcementId}`);
            setUpdateTable(true);
            // O anúncio foi excluído com sucesso.
        } catch (error) {
            console.error('Error during announcement deletion', error);
            // Lida com erros, se houver algum.
        }
    };

    const imageContainerStyle = {
        display: 'flex',       // Utiliza flexbox para exibir as imagens em linha
        gap: '5px',           // Espaçamento entre as imagens
        justifyContent: 'center', // Centraliza as imagens horizontalmente
    };
    const imageStyle = {
        width: '50px',   // Defina a largura desejada para as imagens
        height: '50px',  // Defina a altura desejada para as imagens
    };

    return (
        <div className="wrapper-houses">
            <div className="table-responsive" style={{overflowX: 'scroll', overflowY: 'hidden'}}>
                <table className="table text-center">
                    <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>ID da casa</th>
                        <th>Imagem da casa</th>
                        <th>Nome da casa</th>
                        <th>PreçoClick</th>
                        <th>NumClicks</th>
                        <th>Estado</th>
                        <th>DataFinal</th>
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    {announcements.map((announcement, key) => {
                        return (
                            <tr key={key}>
                                <td>{announcement.id}</td>
                                <td>{announcement.House.id}</td>
                                <td>
                                    <div style={imageContainerStyle}>
                                        {announcement.House.imageUrls.map((imageUrl, i) => (
                                            <img key={i} src={imageUrl}
                                                 alt={`House ${announcement.House.id} - Image ${i + 1}`}
                                                 style={imageStyle}/>
                                        ))}
                                    </div>
                                </td>
                                <td>{announcement.House.name}</td>
                                <td>{announcement.priceClick}</td>
                                <td>{announcement.numbClicks}</td>
                                <td>{announcement.state}</td>
                                <td>{new Date(announcement.end_date).toLocaleDateString('pt-PT')}</td>
                                <td>
                                    {announcement.state === 0 ? (
                                        <>
                                            <button onClick={() => approveAnnouncement(announcement.id)}><i
                                                className="fa fa-check"></i></button>
                                        </>

                                    ) : null}
                                    <button onClick={() => deleteAnnouncement(announcement.id)}><i
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
                        <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}