import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Card from "../components/househome";
import {api} from "../services/api";
import axios from 'axios';
import Swal from "sweetalert2";

/**
 * @author Luís Anjo
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home() {
    const [searchParams, setSearchParams] = useState({});
    const navigate = useNavigate();
    const [averageRatings, setAverageRatings] = useState({});
    const [houses, setHouses] = useState([]);
    const [announcements, setAnnouncements] = useState(null);
    const [filteredAnnouncements, setFilteredAnnouncements] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const handleInputChange = (event) => {
        if (event.target.value !== '')
            setSearchParams({...searchParams, [event.target.name]: event.target.value});
    };

    const recordsPerPage = 15; // Número de registros por página

    const calculateAverageRating = () => {
        if (houses && houses.length > 0) {
            const ratings = {};
            houses.forEach((house) => {
                let totalRating = 0;
                let feedbackCount = 0;

                if (house.Reservations && house.Reservations.length > 0) {
                    house.Reservations.forEach((reservation) => {
                        if (reservation.Feedback) {
                            totalRating += reservation.Feedback.classification;
                            feedbackCount++;
                        }
                    });
                }

                const average = feedbackCount > 0 ? totalRating / feedbackCount : 0;
                ratings[house.id] = average;
            });

            setAverageRatings(ratings);
        }
    };

    useEffect(() => {
        const fetchHouses = async () => {
            try {
                if (Object.keys(searchParams).length && searchParams.name !== '') {
                    await searchHouses();
                } else {
                    const response = await api.get(`/houses`);
                    const shuffledHouses = response.data.data.sort(() => Math.random() - 0.5);
                    const totalPages = Math.ceil(shuffledHouses.length / recordsPerPage);
                    setTotalPages(totalPages);
                    const startIndex = (currentPage - 1) * recordsPerPage;
                    const endIndex = startIndex + recordsPerPage;
                    const housesPerPage = shuffledHouses.slice(startIndex, endIndex);
                    setHouses(housesPerPage);
                }

                const responsee = await api.get(`/announcements`);

                setAnnouncements(responsee.data.data);

            } catch (error) {
                console.log(error);
            }
        };

        fetchHouses();
    }, [currentPage]);

    useEffect(() => {
        calculateAverageRating();

        if (announcements) {
            const filtered = announcements.filter((announcement) => announcement.state === 1);
            filtered.sort((a, b) => {
                if (a.priceClick !== b.priceClick) {
                    return b.priceClick - a.priceClick;
                }

                if (a.numbClicks !== b.numbClicks) {
                    return b.numbClicks - a.numbClicks;
                }

                const endDateA = new Date(a.end_date);
                const endDateB = new Date(b.end_date);
                return endDateA - endDateB;
            });

            setFilteredAnnouncements(filtered);

        }

    }, [houses, announcements]);

    const searchHouses = async () => {

        if (new Date(searchParams.checkin).getTime() > new Date(searchParams.checkout).getTime()) {
            Swal.fire({
                icon: 'warning',
                confirmButtonColor: "#0d6efd",
                title: 'Aviso',
                text: 'Datas incorretas!',
            });
            return;
        }

        const response = await api.post('/houses/search', searchParams)
        const shuffledHouses = response.data;
        const totalPages = Math.ceil(shuffledHouses.length / recordsPerPage);
        setTotalPages(totalPages);
        const startIndex = (currentPage - 1) * recordsPerPage;
        const endIndex = startIndex + recordsPerPage;
        const housesPerPage = shuffledHouses.slice(startIndex, endIndex);

        setHouses(housesPerPage);
    }
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    /**
     * Search Houses
     *
     * @author João Ponte
     * @param event
     * @returns {Promise<void>}
     */
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            if (Object.keys(searchParams).length && searchParams.name !== '') {
                await searchHouses();
            }
        } catch (e) {

        }
    }

    const handleAnnouncementClick = async (announcementId) => {
        try {
            const response = await axios.put(
                `${process.env.REACT_APP_API_URL}/announcements/${announcementId}/clicks`,
                {numbClicks: -1}
            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form>
                <div className="row">
                    <div className="col-md-12">
                        <label>Pesquisa</label>
                        <input className="form-control" type="search"
                               name="name"
                               placeholder="Search"
                               aria-label="Search"
                               onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <label>Check-in:</label>
                        <input type="date" className="form-control" name="checkin" onChange={handleInputChange}/>
                    </div>
                    <div className="col-md-4">
                        <label>Check-out:</label>
                        <input type="date" className="form-control" name="checkout" onChange={handleInputChange}/>
                    </div>
                    <div className="col-md-2">
                        <label>Nº Hóspedes:</label>
                        <input type="number" className="form-control" name="guestsNumber" defaultValue="1"
                               onChange={handleInputChange}/>
                    </div>
                    <div className="col-md-2 pt-4">
                        <button className="btn btn-outline-secondary w-100" type="submit" onClick={onSubmit}>Pesquisar
                        </button>
                    </div>
                </div>
            </form>

            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {!searchParams.name && filteredAnnouncements && filteredAnnouncements.slice(0, 3).map((announcement, key) => (
                            <Card
                                key={announcement.id} // Adicione a propriedade "key" aqui
                                imageUrl={announcement.House.imageUrls[0]}
                                title={announcement.House.name}
                                description={announcement.House.price}
                                onViewClick={async () => {
                                    await handleAnnouncementClick(announcement.id);
                                    navigate(`/houses/${announcement.House.id}${!!(announcement && Object.keys(announcement).length > 0) ? '?click=1' : ''}`)
                                }}
                                classifi={averageRatings[announcement.House.id]}
                                pro={(announcement && Object.keys(announcement).length > 0)}
                            />
                        ))}
                        {houses && houses.map((house, key) => (
                            <Card
                                key={house.id} // Adicione a propriedade "key" aqui
                                imageUrl={house.imageUrls[0]}
                                title={house.name}
                                description={house.price}
                                onViewClick={() => navigate(`/houses/${house.id}${(!!houses[key].Announcements && houses[key].Announcements.length > 0) ? '?click=1' : ''}`)}
                                classifi={averageRatings[house.id]}
                                pro={!!(houses[key].Announcements && houses[key].Announcements.length > 0)}
                            />
                        ))}
                    </div>

                    <div className="d-block my-3">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <button className="page-link"
                                            onClick={() => handlePageChange(currentPage - 1)}>Previous
                                    </button>
                                </li>

                                {[...Array(totalPages)].map((_, index) => (
                                    <li key={index}
                                        className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                        <button className="page-link"
                                                onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
                                    </li>
                                ))}

                                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                    <button className="page-link"
                                            onClick={() => handlePageChange(currentPage + 1)}>Next
                                    </button>
                                </li>
                            </ul>
                        </nav>
                        <a href="/houses/new" className="btn btn-outline-success w-100">Adiciona a tua casa aqui!</a>
                    </div>
                </div>
            </div>
        </div>
    );
}