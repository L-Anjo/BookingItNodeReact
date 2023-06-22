import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {api} from "../../services/api";
import {AuthContext} from "../../middleware/auth";
import Swal from "sweetalert2";

/**
 * @author Diogo
 * @returns {JSX.Element}
 * @constructor
 */
export default function ListUserHouses() {
    const {user} = useContext(AuthContext);
    const [houses, setHouses] = useState([]);
    const [updateTable, setUpdateTable] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const navigate = useNavigate();
    const recordsPerPage = 20; // Número de registros por página

    useEffect(() => {
        const getUsersHouse = async () => {
            try {
                const response = await api.get(`/users/${user.id}/houses`);
                const allHouses = response.data.data;
                const totalPages = Math.ceil(allHouses.length / recordsPerPage);
                setTotalPages(totalPages);

                const startIndex = (currentPage - 1) * recordsPerPage;
                const endIndex = startIndex + recordsPerPage;
                const housesPerPage = allHouses.slice(startIndex, endIndex);

                setHouses(housesPerPage);
            } catch (error) {
                console.log(error);
            }
        };

        getUsersHouse();

        if (updateTable) {
            setUpdateTable(false);
        }
    }, [currentPage, updateTable]);


    const handlePageChange = (page) => {
        setCurrentPage(page);
        setUpdateTable(false);
    };
    const imageContainerStyle = {
        display: 'flex',       // Utiliza flexbox para exibir as imagens em linha
        gap: '5px',           // Espaçamento entre as imagens
    };
    const imageStyle = {
        width: '50px',   // Defina a largura desejada para as imagens
        height: '50px',  // Defina a altura desejada para as imagens
    };

    const handleCreateAnnouncement = async (id) => {
        try {
            navigate(`/houses/${id}/create-announcement`);
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditHouse = async (id) => {
        try {
            navigate(`/houses/${id}/EditHouseUser`);
        } catch (error) {
            console.log(error);
        }
    };

    const removeHouse = async (houseId) => {
        try {
            Swal.fire({
                title: 'Tem a certeza?',
                text: "Não poderá reverter esta ação!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim, apague!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await Swal.fire(
                        'Apagado!',
                        'A casa foi Eliminada.',
                        'success'
                    )
                    await api.delete(`/houses/${houseId}`);
                    setUpdateTable(true);
                }
            })
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="wrapper-houses">
            <div className="table-responsive" style={{overflowX: 'scroll', overflowY: 'hidden'}}>
                <table className="table text-center">
                    <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Imagem</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Maximo Pessoas</th>
                        <th>Distrito</th>
                        <th>Concelho</th>
                        <th>Estado Casa</th>
                        <th>Proprietário Casa</th>
                        <th>Serviços</th>
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    {houses.map((house, index) => (
                        <tr key={index}>
                            <td>{house.id}</td>
                            <td>
                                <div style={imageContainerStyle}>
                                    {house.imageUrls.map((imageUrl, i) => (
                                        <img key={i} src={imageUrl} alt={`House ${house.id} - Image ${i + 1}`}
                                             style={imageStyle}/>
                                    ))}
                                </div>
                            </td>
                            <td>{house.name}</td>
                            <td>{house.price}</td>
                            <td>{house.guestsNumber}</td>
                            <td>{house.PostalCode.district}</td>
                            <td>{house.PostalCode.concelho}</td>
                            <td>{house.StatusHouse.status}</td>
                            <td>{house.User.name}</td>
                            <td>{house.Services.map(service => service.name).join(', ')}</td>
                            <td>
                                <button onClick={() => handleEditHouse(house.id)}><i className="fa fa-pencil"></i>
                                </button>
                                <button onClick={() => removeHouse(house.id)}><i className="fa fa-trash"></i></button>
                                {house.status !== 1 && ( // Verifica se o estado da casa é diferente de 1
                                    <button onClick={() => handleCreateAnnouncement(house.id)} title="Criar Anúncio"
                                            className="btn btn-warning"><i className="fa fa-star"></i></button>
                                )}

                            </td>
                            <td>

                            </td>
                        </tr>
                    ))}
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