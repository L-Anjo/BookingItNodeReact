const userMessage = require("../messages/userMessage")
const houseMessage = require("../messages/houseMessage")
const User = require("../models/User");
const bcrypt = require('bcrypt');
const House = require("../models/House");
const Reservation = require("../models/Reservation");
const PostalCode = require("../models/PostalCode");
const StatusHouse = require("../models/StatusHouse");
const Feedback = require("../models/Feedback");
const Service = require("../models/Service");
const {cleanEmptyFieldsObject} = require("../helpers");
const Announcement = require("../models/Announcement");
const ReservationState = require("../models/ReservationState");
const announcementMessage = require("../messages/announcementMessage")
const reservationMessage = require("../messages/reservationMessage")

/**
 * GET
 * @author Pedro Martins
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.getUsersReservation = async (req, res) => {
    try {
        const user_id = req.userId;
        const reservations = await Reservation.findAll({
            where: {user_id: user_id},
            include: [
                {model: House, include :[{model: PostalCode}]},
                {model: ReservationState},
                {model: User},
                {
                    model: Service,
                    attributes: ['id', 'name'],
                    through: {
                        attributes: ['price'],
                    },
                },
            ],
        });


        if (!reservations) {
            return res.status(reservationMessage.error.reservationDontExist.http).send(reservationMessage.error.reservationDontExist);
        }

        return res.status(200).send({data: reservations});
    } catch (err) {
        console.error('Error during registration', err);

        return res.status(500).send({error: 'Internal server error'});
    }
}


/**
 * GET
 * @author Pedro Martins
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.getUsersHouse = async (req, res) => {
    try {
        const user_id = req.userId;
        const houses = await House.findAll({
            where: {user_id: user_id},
            include: [
                //   { model: Announcement},
                {model: Reservation, required: false, include: [{model: Feedback}]},
                {model: PostalCode},
                {model: StatusHouse},
                {model: User},
                {
                    model: Service,
                    attributes: ['id', 'name'],
                    through: {attributes: []}, // para não mostrar informações da tabela intermediária
                },
            ],
        });


        if (!houses) {
            return res.status(houseMessage.error.houseDontExist.http).send(houseMessage.error.houseDontExist);
        }

        return res.status(200).send({data: houses});
    } catch (err) {
        console.error('Error during registration', err);

        return res.status(500).send({error: 'Internal server error'});
    }
}

/**
 * GET
 * @author Diogo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.getUsersAnnouncement = async (req, res) => {
    try {
        const user_id = req.userId;
        const announcements = await Announcement.findAll({
            include: [
                {
                    model: House,
                    where: {user_id: user_id},
                    
                },
            ],
        });


        if (!announcements) {
            return res.status(announcementMessage.error.announcementDontExist.http).send(announcementMessage.error.announcementDontExist);
        }

        return res.status(200).send({data: announcements});
    } catch (err) {
        console.error('Error during registration', err);

        return res.status(500).send({error: 'Internal server error'});
    }
}

/**
 * GET
 * @author Diogo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.getAdvReservations = async (req, res) => {
    try {
        const user_id = req.userId;
        const reservations = await Reservation.findAll({
            include: [
                {
                    model: House,
                    where: {user_id: user_id},
                    include: {model: PostalCode},

                },
                {model: ReservationState},
                {model: User},
                {
                    model: Service,
                    attributes: ['id', 'name'],
                    through: {
                        attributes: ['price'],
                    },
                },
            ],
        });


        if (!reservations) {
            return res.status(reservationMessage.error.reservationDontExist.http).send(reservationMessage.error.reservationDontExist);
        }

        return res.status(200).send({data: reservations});
    } catch (err) {
        console.error('Error during registration', err);

        return res.status(500).send({error: 'Internal server error'});
    }
}

/**
 * GET ALL
 *
 * @author João Ponte
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            include: [
                {
                    association: 'usertype',
                    attributes: {
                        exclude:
                            [
                                'createdAt',
                                'updatedAt'
                            ]
                    },
                }
            ],
            attributes: {
                exclude:
                    [
                        'password',
                        'token',
                        'user_type_id'
                    ]
            },
        });
        if (!users) {
            return res.status(userMessage.error.userDontExist.http).send(userMessage.error.userDontExist);
        }

        return res.status(200).send({users});
    } catch (err) {
        console.error('Error during registration', err);

        return res.status(500).send({error: 'Internal server error'});
    }
}

/**
 * GET
 *
 * @author João Ponte
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.getUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByPk(id, {
            include: [
                {
                    association: 'usertype',
                    attributes: {
                        exclude:
                            [
                                'createdAt',
                                'updatedAt'
                            ]
                    },
                }
            ],
            attributes: {
                exclude:
                    [
                        'password',
                        'token'
                    ]
            },
        });

        if (!user) {
            return res.status(userMessage.error.userDontExist.http).send(userMessage.error.userDontExist);
        }

        return res.status(200).send({data: user});
    } catch (err) {
        console.error('Error during registration', err);

        return res.status(500).send({error: 'Internal server error'});
    }
}

/**
 * Register
 *
 * @author João Ponte
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.create = async (req, res) => {
    try {
        if (!req.body.email || !req.body.password || !req.body.name) {
            return res.status(userMessage.error.fieldMissing.http).send(userMessage.error.fieldMissing);
        }

        if (req.body.password !== req.body.confirmPassword) {
            userMessage.error.fieldMissing.errors = [{
                param: 'password',
                msg: 'Password and Confirm Password does not match.'
            }];
            return res.status(userMessage.error.fieldMissing.http).send(userMessage.error.fieldMissing);
        }

        let user;
        try {
            user = await User.create({
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, parseInt(process.env.BCRYPT_SALTROUNDS)),
                name: req.body.name,
                phone: req.body.phone,
                user_type_id: req.body.user_type_id ?? 1
            });
        } catch (e) {
            return res.status(userMessage.error.emailAlreadyRegisted.http).send(userMessage.error.emailAlreadyRegisted);
        }

        userMessage.success.userCreated.data = {
            id: user.id
        }
        return res.status(userMessage.success.userCreated.http).send(userMessage.success.userCreated);
    } catch (err) {
        console.error('Error during registration', err);

        return res.status(500).send({error: 'Internal server error'});
    }
};

/**
 * Update
 *
 * @author João Ponte
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.update = async (req, res) => {
    try {
        const {id} = req.params;

        req.body = cleanEmptyFieldsObject(req.body)

        if (!req.body) {
            return res.status(userMessage.error.fieldMissing.http).send(userMessage.error.fieldMissing);
        }

        if (req.body.password && (!req.body.newPassword || req.body.newPassword === '' || req.body.newPassword !== req.body.confirmPassword)) {
            userMessage.error.fieldMissing.errors = [{
                param: (req.body.newPassword !== req.body.confirmPassword) ? 'newPassword' : 'password',
                msg: 'Password and Confirm Password does not match.'
            }];
            return res.status(userMessage.error.fieldMissing.http).send(userMessage.error.fieldMissing);
        }

        let update = true;

        if (req.body.password !== '' && req.body.newPassword !== '' && req.body.password !== req.body.newPassword && req.body.newPassword === req.body.confirmPassword) {
            update = false;
            let user = await User.findByPk(id);

            update = (user) ? await user.comparePassword(req.body.password) : false;

            if (update) {
                req.body.password = bcrypt.hashSync(req.body.newPassword, parseInt(process.env.BCRYPT_SALTROUNDS));
            }
        }

        if (update) {
            const updatedRows = await User.update(
                req.body,
                {
                    where: {id: id},
                }
            );

            if (parseInt(updatedRows)) {
                return res.status(userMessage.success.userUpdated.http).send(userMessage.success.userUpdated);
            }
        }

        return res.status(userMessage.error.userDontExist.http).send(userMessage.error.userDontExist);
    } catch (err) {
        console.error('Error during registration', err);

        return res.status(500).send({error: 'Internal server error'});
    }
};

/**
 * Soft Delete
 *
 * @author João Ponte
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.softDelete = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByPk(id);

        if (user) {
            await user.update({status: 0});
            return res.status(userMessage.success.userDeleted.http).send(userMessage.success.userDeleted);
        }

        return res.status(userMessage.error.userDontExist.http).send(userMessage.error.userDontExist);
    } catch (err) {
        console.error('Error during registration', err);

        return res.status(500).send({error: 'Internal server error'});
    }
};

/**
 * Hard Delete
 *
 * @author João Ponte
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.hardDelete = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(userMessage.error.userDontExist.http).send(userMessage.error.userDontExist);
        }
        await user.destroy();
        return res.status(userMessage.success.userDeleted.http).send(userMessage.success.userDeleted);
    } catch (err) {
        console.error('Error during registration', err);

        return res.status(500).send({error: 'Internal server error'});
    }
};
