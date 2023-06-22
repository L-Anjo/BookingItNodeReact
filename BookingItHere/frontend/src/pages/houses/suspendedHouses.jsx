import React, {useEffect, useState} from 'react';
import {api} from "../../services/api";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
const MySwal = withReactContent(Swal)

/**
 * @author Pedro Martins
 * @returns {JSX.Element}
 * @constructor
 */
export default function ListSuspendedHouses() {
    const [suspendedHouses, setSuspendedHouses] = useState([]);
    const [headers] = useState({'Authorization': `Bearer ${localStorage.getItem('token')}`});
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [updateTable, setUpdateTable] = useState(false);

    const recordsPerPage = 20; // Número de registros por página

    useEffect(() => {
        const getAllHouses = async () => {
            try {
                const response = await api.get('/houses/suspended');
                const allHouses = response.data.data;
                const totalPages = Math.ceil(allHouses.length / recordsPerPage);
                setTotalPages(totalPages);

                const startIndex = (currentPage - 1) * recordsPerPage;
                const endIndex = startIndex + recordsPerPage;
                const housesPerPage = allHouses.slice(startIndex, endIndex);
                setSuspendedHouses(housesPerPage);
            } catch (error) {
                console.log(error);
            }
        };

        getAllHouses();

        if (updateTable) {
            setUpdateTable(false);
        }
    }, [currentPage, headers, updateTable]);

    const updateHouseState = async (houseId) => {
        try {
            const response = await api.put(`/houses/${houseId}/status/2`);
            MySwal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Alojamento aprovado!',
                showConfirmButton: false,
                timer: 1500
            });
            setUpdateTable(true);
        } catch (error) {
            console.log(error);
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setUpdateTable(false);
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
                        'O Alojamento foi rejeitado.',
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

    const imageContainerStyle = {
        display: 'flex',       // Utiliza flexbox para exibir as imagens em linha
        gap: '5px',           // Espaçamento entre as imagens
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

                        {suspendedHouses.map((house, key) => {
                            return (
                                <tr key={key}>
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
                                    <td className="col-md-2">
                                        <button onClick={() => updateHouseState(house.id)} className="btn btn-success">
                                            <i className="fa fa-check"></i></button>
                                        <button onClick={() => removeHouse(house.id)} className="btn btn-danger"><i
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