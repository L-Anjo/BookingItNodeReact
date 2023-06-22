import React, {useContext, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'font-awesome/css/font-awesome.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import {AuthProvider, AuthContext} from "./middleware/auth";
import CreateUser from './pages/users/create'
import ListUsers from './pages/users/users'
import CreateHouse from './pages/houses/create'
import EditHouse from './pages/houses/edit'
import CreatePayment from './pages/payments/payment'
import ListHouses from './pages/houses/houses'
import HouseDetails from './pages/houses/houseDetails'
import EditHouseUser from './pages/houses/housesEdit'
import ReservationDetails from './pages/reservations/reservationDetails'
import Login from './pages/auth/login'
import NotFound from './pages/notFoundpage'
import Home from './pages/home'
import ImgUpload from "./pages/houses/uploadimages";
import EditUser from "./pages/users/edit";
import EditReservation from "./pages/reservations/edit";
import EditFeedback from "./pages/feedbacks/edit";
import EditService from "./pages/services/edit";
import ListSuspendedHouses from './pages/houses/suspendedHouses'
import ListSuspendedServices from './pages/services/suspendedServices'
import ListUserReservations from './pages/reservations/reservations'
import ListReservations from './pages/reservations/allReservations'
import ListServices from './pages/services/services'
import CreateFeedback from './pages/feedbacks/create'
import ListFeedbacks from './pages/feedbacks/feedbacks'
import AdminPage from './pages/admin/admins'
import AdvertiserPage from './pages/advertiser/advertiser'
import ListUserHouses from './pages/users/userhouses';
import ListAnnouncements from './pages/announcements/announcements';
import ListUserAnnouncements from './pages/users/userannouncements';
import CreateAnnouncement from './pages/announcements/create';
import EditAnnouncement from './pages/announcements/edit';
import ListAdvReservations from './pages/users/advcancelres';
import ListSuspendedReservations from './pages/reservations/suspendedReservations';
import CreateService from './pages/services/create'
import CreateAnnouncementPayment from './pages/payments/announcementspayment';
import Header from "./components/header";
import Forget from "./pages/auth/forget";

function App() {
    useEffect(() => {
        document.title = 'BookingItHere.com';
    }, []);

    /**
     * Private pages condition
     * @author João Ponte
     *
     * @param children
     * @returns {*|JSX.Element}
     * @constructor
     */
    const Private = ({children}) => {
        const {authenticated, loading} = useContext(AuthContext);
        if (loading) {
            return <div className="loading">Loading</div>;
        }
        if (!authenticated) {
            return <Navigate to="/login"/>;
        }
        return children;
    };

    /**
     * Advertiser pages condition
     * @author João Ponte
     *
     * @param children
     * @returns {*|JSX.Element}
     * @constructor
     */
    const AdvPrivate = ({children}) => {
        const {authenticated, user, loading} = useContext(AuthContext);
        if (loading) {
            return <div className="loading">Loading</div>;
        }
        if (!authenticated || user.perms < 2) {
            return <Navigate to="/"/>;
        }
        return children;
    };

    /**
     * Admin page condition
     * @author João Ponte
     *
     * @param children
     * @returns {*|JSX.Element}
     * @constructor
     */
    const AdminPrivate = ({children}) => {
        const {authenticated, user, loading} = useContext(AuthContext);
        if (loading) {
            return <div className="loading">Loading</div>;
        }
        if (!authenticated || user.perms < 3) {
            return <Navigate to="/"/>;
        }
        return children;
    };


    /**
     * Routes
     */
    return (
        <Router>
            <AuthProvider>
                <div className="App">
                    <Header/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <Routes>
                                    <Route path='*' element={<NotFound/>}/>
                                    <Route exact path="/" element={<Home/>}/>
                                    <Route path="/houses/:id/upload" element={<ImgUpload/>}/>
                                    <Route exact path="/login" element={<Login/>}/>
                                    <Route exact path="/forget" element={<Forget/>}/>
                                    <Route path="/users/new" element={<CreateUser/>}/>
                                    <Route exact path="/users/:id" element={<Private><EditUser/></Private>}/>
                                    <Route path="/houses/new" element={<Private><CreateHouse/></Private>}/>
                                    <Route path="/houses" element={<AdvPrivate><ListHouses/></AdvPrivate>}/>
                                    <Route path="/houses/:id" element={<HouseDetails/>}/>
                                    <Route path="/houses/:id/reservation/:id" element={<ReservationDetails/>}/>
                                    <Route path="/houses/:id/reservation/:id/payment/:id" element={<CreatePayment/>}/>
                                    <Route path="/houses/:id/EditHouseUser" element={<EditHouseUser/>}/>
                                    <Route path="/users/:id/houses"
                                           element={<AdvPrivate><ListUserHouses/></AdvPrivate>}/>
                                    <Route path="/users/:id/announcements"
                                           element={<AdvPrivate><ListUserAnnouncements/></AdvPrivate>}/>
                                    <Route path="/users/:id/reservation"
                                           element={<Private><ListUserReservations/></Private>}/>
                                    <Route path="/announcements" element={<Private><ListAnnouncements/></Private>}/>
                                    <Route path="/users/:id/reservation/:id/feedbacks"
                                           element={<Private><CreateFeedback/></Private>}/>
                                    <Route path="/users/:id/houses/reservation"
                                           element={<AdvPrivate><ListAdvReservations/></AdvPrivate>}/>
                                    <Route path="/services/new" element={<Private><CreateService/></Private>}/>
                                    <Route path="/advertiser" element={<AdvPrivate><AdvertiserPage/></AdvPrivate>}/>
                                    <Route path="/houses/:id/create-announcement"
                                           element={<AdvPrivate><CreateAnnouncement/></AdvPrivate>}/>
                                    <Route path="/houses/:id/announcement/:id/announcementPayment/:id"
                                           element={<AdvPrivate><CreateAnnouncementPayment/></AdvPrivate>}/>

                                    {/*Admin Route*/}
                                    <Route exact path="/admin/users/:id"
                                           element={<AdminPrivate><EditUser/></AdminPrivate>}/>
                                    <Route path="/admin/users" element={<AdminPrivate><ListUsers/></AdminPrivate>}/>

                                    <Route path="/admin/houses" element={<AdminPrivate><ListHouses/></AdminPrivate>}/>
                                    <Route path="/admin/suspendedhouses"
                                           element={<AdminPrivate><ListSuspendedHouses/></AdminPrivate>}/>
                                    <Route path="/admin/suspendedReservations"
                                           element={<AdminPrivate><ListSuspendedReservations/></AdminPrivate>}/>
                                    <Route path="/admin/suspendedServices"
                                           element={<AdminPrivate><ListSuspendedServices/></AdminPrivate>}/>
                                    <Route path="/admin/reservation"
                                           element={<AdminPrivate><ListReservations/></AdminPrivate>}/>
                                    <Route path="/admin/services"
                                           element={<AdminPrivate><ListServices/></AdminPrivate>}/>
                                    <Route path="/admin/announcements"
                                           element={<AdminPrivate><ListAnnouncements/></AdminPrivate>}/>
                                    <Route path="/admin/announcements/:id"
                                           element={<AdminPrivate><EditAnnouncement/></AdminPrivate>}/>
                                    <Route path="/admin" element={<AdminPrivate><AdminPage/></AdminPrivate>}/>
                                    <Route path="/admin/feedbacks"
                                           element={<AdminPrivate><ListFeedbacks/></AdminPrivate>}/>
                                    <Route path="/admin/feedbacks/:id"
                                           element={<AdminPrivate><EditFeedback/></AdminPrivate>}/>
                                    <Route path="/admin/services/:id"
                                           element={<AdminPrivate><EditService/></AdminPrivate>}/>
                                    <Route path="/admin/houses/:id"
                                           element={<AdminPrivate><EditHouse/></AdminPrivate>}/>
                                    <Route path="/admin/reservation/:id"
                                           element={<AdminPrivate><EditReservation/></AdminPrivate>}/>
                                </Routes>
                            </div>
                        </div>
                    </div>
                    <footer className="container">
                        <p className="float-end"><a href="#">Back to top</a></p>
                        <p>© 2023 BookingItHere.com</p>
                    </footer>
                </div>
            </AuthProvider>
        </Router>
    )
}

export default App