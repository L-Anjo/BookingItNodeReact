const express = require('express');
const router = express.Router();

const authRoutes = require('./routes/authRoutes');
const userRoute = require('./routes/userRoute');
const userTypeRoute = require('./routes/userTypeRoute');
const houseRoutes = require('./routes/houseRoutes');
const postalCodeRoutes = require('./routes/postalCodeRoutes');
const statusHouseRoutes = require('./routes/statusHouseRoutes');
const swaggerRoutes = require('./routes/swaggerRoutes');
const appRoutes = require('./routes/appRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const houseServicesRoutes = require('./routes/houseServiceRoutes');
const announcementRoutes = require('./routes/announcementRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const reservationStateRoutes = require('./routes/reservationStateRoutes');
const announcementPaymentRoutes = require('./routes/announcementPaymentRoutes')
const paymentStateRoutes = require('./routes/paymentStateRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

// Routes
router.use('/auth', authRoutes);

router.use('/users', userRoute);

router.use('/usertypes', userTypeRoute);

router.use('/houses', houseRoutes);

router.use('/postalcodes', postalCodeRoutes);

router.use('/statushouses', statusHouseRoutes);

router.use('/services', serviceRoutes);

router.use('/notification', notificationRoutes);

router.use('/announcements', announcementRoutes);

router.use('/payments', paymentRoutes);

router.use('/reservation', reservationRoutes);

router.use('/reservationstates', reservationStateRoutes);

router.use('/announcementPayments', announcementPaymentRoutes);

router.use('/paymentStates', paymentStateRoutes);

router.use('/feedbacks', feedbackRoutes);

router.use('/uploads', uploadRoutes);

router.use('/docs', swaggerRoutes);

router.use('/', appRoutes);

module.exports = router;