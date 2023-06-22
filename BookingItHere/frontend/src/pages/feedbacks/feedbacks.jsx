import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {api} from "../../services/api";

/**
 * @author Pedro Martins
 * @returns {JSX.Element}
 * @constructor
 */
export default function ListFeedbacks() {
    const [feedbacks, setFeedbacks] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [updateTable, setUpdateTable] = useState(false);
    const navigate = useNavigate();
    const recordsPerPage = 20; // Número de registros por página

    useEffect(() => {
        const getAllFeedbacks = async () => {
            try {
                const response = await api.get(`/feedbacks`);
                const allFeedbacks = response.data.data;
                const totalPages = Math.ceil(allFeedbacks.length / recordsPerPage);
                setTotalPages(totalPages);

                const startIndex = (currentPage - 1) * recordsPerPage;
                const endIndex = startIndex + recordsPerPage;
                const feedbacksPerPage = allFeedbacks.slice(startIndex, endIndex);

                setFeedbacks(feedbacksPerPage);
            } catch (error) {
                console.log(error);
            }
        };

        getAllFeedbacks();

        if (updateTable) {
            setUpdateTable(false);
        }
    }, [currentPage, updateTable]);


    const handlePageChange = (page) => {
        setCurrentPage(page);
        setUpdateTable(false);
    };
    const removeFeedback = async (feedbackId) => {
        try {
            const response = await api.delete(`/feedbacks/${feedbackId}`);
            setUpdateTable(true);
        } catch (error) {
            console.log(error);
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
        <div>
            <div className="wrapper-houses">
                <div className="table-responsive" style={{overflowX: 'scroll', overflowY: 'hidden'}}>
                    <table className="table text-center">
                        <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Utilizador</th>
                            <th>Nome do utilizador</th>
                            <th>Imagem Casa</th>
                            <th>Casa</th>
                            <th>Reserva</th>
                            <th>Classificação</th>
                            <th>Comentário</th>
                            <th>Ações</th>
                        </tr>
                        </thead>
                        <tbody>
                        {feedbacks.map((feedback, key) => {
                            return (
                                <tr key={key}>
                                    <td>{feedback.id}</td>
                                    <td>{feedback.Reservation.User.id}</td>
                                    <td>{feedback.Reservation.User.name}</td>
                                    <td>
                                        <div style={imageContainerStyle}>
                                            {feedback.Reservation.House.imageUrls.map((imageUrl, i) => (
                                                <img key={i} src={imageUrl}
                                                     alt={`House ${feedback.Reservation.House.id} - Image ${i + 1}`}
                                                     style={imageStyle}/>
                                            ))}
                                        </div>
                                    </td>
                                    <td>{feedback.Reservation.House.name}</td>
                                    <td>{feedback.reservation}</td>
                                    <td>{feedback.classification}</td>
                                    <td>{feedback.comment}</td>
                                    <td>
                                        <button onClick={() => navigate(`/admin/feedbacks/${feedback.id}`)}><i
                                            className="fa fa-pencil"></i></button>
                                        <button onClick={() => removeFeedback(feedback.id)}><i
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