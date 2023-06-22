import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {api} from "../../services/api";
import Swal from "sweetalert2";

/**
 * @author João Ponte
 * @returns {JSX.Element}
 * @constructor
 */
export default function ListUsers() {
    const [users, setUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const recordsPerPage = 20; // Número de registros por página
    const [updateTable, setUpdateTable] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const getAllUsers = async () => {
            try {
                const response = await api.get(`/users`);
                const allUsers = response.data.users;
                const totalPages = Math.ceil(allUsers.length / recordsPerPage);
                setTotalPages(totalPages);

                const startIndex = (currentPage - 1) * recordsPerPage;
                const endIndex = startIndex + recordsPerPage;
                const usersPerPage = allUsers.slice(startIndex, endIndex);

                setUsers(usersPerPage);
            } catch (error) {
                console.log(error);
            }
        };

        getAllUsers();
        if (updateTable) {
            setUpdateTable(false);
        }
    }, [currentPage, updateTable]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setUpdateTable(false);
    };

    const removeUser = async (userId) => {
        try {
            Swal.fire({
                title: 'Tem a certeza?',
                text: "",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim, desativar conta!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await Swal.fire(
                        'Desativada!',
                        'Utilizador desativado.',
                        'success'
                    )
                    await api.delete(`/users/${userId}`);
                    setUpdateTable(true);
                }
            })
        } catch (error) {
            console.log(error);
        }
    };


    /**
     * Activate user
     *
     * @author João Ponte
     * @param userId
     * @returns {Promise<void>}
     */
    const activateUser = async (userId) => {
        try {
            await api.put(`/users/${userId}`, {
                status: 1
            });
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
                            <th>Name</th>
                            <th>Email</th>
                            <th>Ações</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user, key) => {
                            return (
                                <tr key={key}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td className="col-md-2">
                                        <button onClick={() => navigate(`/admin/users/${user.id}`)}
                                                className="btn btn-primary"><i className="fa fa-pencil"></i></button>
                                        {user.status === 1 ? (
                                                <button onClick={() => removeUser(user.id)} className="btn btn-warning"><i
                                                    className="fa fa-ban"></i></button>)
                                            :
                                            (<button onClick={() => activateUser(user.id)} className="btn btn-success">
                                                <i
                                                    className="fa fa-check"></i></button>)
                                        }
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