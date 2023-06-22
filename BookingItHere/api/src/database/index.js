const Sequelize = require("sequelize");
const dbConfig = require('../config/sequelize');
const User = require('../models/User');
const UserType = require('../models/UserType');
const PostalCode = require('../models/PostalCode');
const StatusHouse = require('../models/StatusHouse');
const Service = require('../models/Service');
const HouseServices = require('../models/HouseServices');
const House = require('../models/House');
const Announcement = require('../models/Announcement');
const Reservation = require('../models/Reservation');
const ReservationState = require('../models/ReservationState');
const Notification = require('../models/Notification');
const Payment = require('../models/Payment');
const PaymentState = require('../models/PaymentState');
const ReservationServices = require('../models/ReservationServices');
const Feedback = require('../models/Feedback');
const AnnouncementPayment = require('../models/AnnouncementPayment')

const sequelize = new Sequelize(dbConfig);
sequelize.authenticate()
    .then(() => {
        //console.log('connected..')
    })
    .catch(err => {
        console.log('Error'+ err)
    })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
// db.sequelize.sync({ force: true })
//     .then(() => {
//         console.log('yes re-sync done!')
//     })

// Models Init
User.init(sequelize);
UserType.init(sequelize);
House.init(sequelize);
PostalCode.init(sequelize);
Service.init(sequelize);
StatusHouse.init(sequelize);
HouseServices.init(sequelize);
Announcement.init(sequelize);
Reservation.init(sequelize);
ReservationServices.init(sequelize);
ReservationState.init(sequelize);
Payment.init(sequelize);
PaymentState.init(sequelize);
Feedback.init(sequelize);
AnnouncementPayment.init(sequelize);
Notification.init(sequelize);

db.user = User;
db.userType = UserType;
db.service = Service;
db.house = House;
db.postalCode = PostalCode;
db.statusHouse = StatusHouse;
db.houseServices = HouseServices
db.announcement = Announcement
db.reservation = Reservation
db.reservationState = ReservationState
db.payment = Payment
db.paymentState = PaymentState
db.reservationServices = ReservationServices
db.feedback = Feedback
db.announcementPayment = AnnouncementPayment
db.notification = Notification

db.sequelize.sync({ force: false })
    .then(() => {
        //console.log('yes re-sync done!')
    });

// Relations
User.associate(sequelize.models);
UserType.associate(sequelize.models);
House.associate(sequelize.models);
PostalCode.associate(sequelize.models);
StatusHouse.associate(sequelize.models);
Service.associate(sequelize.models);
Reservation.associate(sequelize.models);
ReservationState.associate(sequelize.models);
Payment.associate(sequelize.models);
PaymentState.associate(sequelize.models);
Feedback.associate(sequelize.models);
Announcement.associate(sequelize.models);
AnnouncementPayment.associate(sequelize.models);
Notification.associate(sequelize.models);

module.exports = db;
