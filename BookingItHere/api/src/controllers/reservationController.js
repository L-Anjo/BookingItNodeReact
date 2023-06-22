const reservationMessage = require("../messages/reservationMessage");
const ReservationState = require("../models/ReservationState");
const ReservationServices = require("../models/ReservationServices");
const HouseServices = require("../models/HouseServices");
const House = require("../models/House");
const User = require("../models/User");
const Service = require("../models/Service");
const Reservation = require("../models/Reservation");
const Payment = require("../models/Payment");
const PostalCode = require("../models/PostalCode");
const houseMessage = require("../messages/houseMessage");
const userMessage = require("../messages/userMessage");
const reservationStateMessage = require("../messages/reservationStateMessage");
const houseServiceMessage = require("../messages/houseServiceMessage");
const utils = require("../helpers");
const Notification = require("../models/Notification");

/**
 * GET
 * @author Luís Anjo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.getAllReservations = async (req, res) => {
    try {
        const reservation = await Reservation.findAll({
            include: [
                {model: House},
                {model: ReservationState},
                {model: User},
                {
                    model: Service,
                    attributes: ["id", "name"],
                    through: {
                        attributes: ["price"],
                    },
                },
            ],
            attributes: {exclude: ["createdAt", "updatedAt"]},
        });

        if (!reservation) {
            return res
                .status(reservationMessage.error.reservationDontExist.http)
                .send(reservationMessage.error.reservationDontExist);
        }

        return res.status(200).send({data: reservation});
    } catch (err) {
        console.error("Error during registration", err);

        return res.status(500).send({error: "Internal server error"});
    }
};

/**
 * GET
 * @author Luís Anjo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.getReservation = async (req, res) => {
    try {
        const {id} = req.params;
        //Se for utilizador normal || Dados de uma Reserva
        const reservation = await Reservation.findOne({
            where: {id: id},
            include: [
                {model: House},
                {model: ReservationState},
                {model: User},
                {
                    model: Service,
                    attributes: ["id", "name"],
                    through: {
                        attributes: ["price"],
                    },
                },
            ],
        });

        if (!reservation) {
            return res
                .status(reservationMessage.error.reservationDontExist.http)
                .send(reservationMessage.error.reservationDontExist);
        }

        return res.status(200).send({data: reservation});
    } catch (err) {
        console.error("Error during registration", err);

        return res.status(500).send({error: "Internal server error"});
    }
};

/**
 * Create
 * @author Pedro Martins
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.create = async (req, res) => {
    const {init_date, end_date, guestsNumber, house_id, services} = req.body;

    try {
        if (!init_date || !end_date || !house_id || !guestsNumber) {
            return res
                .status(reservationMessage.error.fieldMissing.http)
                .send(reservationMessage.error.fieldMissing);
        }
        let reservation;
        let payment;
        let findHouse = await House.findOne({where: {id: house_id}});

        if (!findHouse) {
            return res
                .status(houseMessage.error.houseDontExist.http)
                .send(houseMessage.error.houseDontExist);
        }

        if (guestsNumber > findHouse.guestsNumber) {
            return res
                .status(reservationMessage.error.guestsNumberExceeded.http)
                .send(reservationMessage.error.guestsNumberExceeded);
        }

        if (new Date(init_date) < Date.now() || new Date(end_date) < Date.now()) {
            return res
                .status(reservationMessage.error.pastDate.http)
                .send(reservationMessage.error.pastDate);
        }

        if (new Date(init_date) > new Date(end_date)) {
            return res
                .status(reservationMessage.error.invalidDate.http)
                .send(reservationMessage.error.invalidDate);
        }

        let resdateCheck;
        resdateCheck = await Reservation.validateReservationDate(
            house_id,
            init_date,
            end_date
        );
        if (resdateCheck == false) {
            return res
                .status(reservationMessage.error.reservationAlreadyRegisted.http)
                .send(reservationMessage.error.reservationAlreadyRegisted);
        }

        reservation = await Reservation.create({
            init_date,
            end_date,
            guestsNumber,
            user_id: req.userId,
            house_id,
            state_id: 1,
        });

        const valor = await Reservation.calculateTotalPrice(
            house_id,
            init_date,
            end_date,
            services,
            House,
            Service,
            HouseServices
        );
        payment = await Payment.create({
            reservation_id: reservation.id,
            state_id: 1,
            creationDate: new Date(),
            paymentDate: null,
            paymentMethod: null,
            paymentValue: valor,
        });

        if (services) {
            await Promise.all(
                services.map(async (service) => {
                    let findHService = await Service.findOne({
                        where: {name: service.name},
                    });

                    if (findHService && findHService.state == 1) {
                        let findHService2 = await HouseServices.findOne({
                            where: {house_id: house_id, service_id: findHService.id},
                        });

                        if (findHService2) {
                            const reservationService = await ReservationServices.create({
                                reservation_id: reservation.id,
                                service_id: findHService.id,

                                price: findHService2.price,
                            });
                        } else {
                            return res
                                .status(houseServiceMessage.error.houseServiceDontExist.http)
                                .send(houseServiceMessage.error.houseServiceDontExist);
                        }
                    }
                })
            );
        }

        reservationMessage.success.reservationApproval.data = {
            id: reservation.id,
        };

        // Enviar notificação de email
        await Notification.create({
            msg: `Nova Reserva: \n Data Início: ${init_date} \n Data Fim: ${end_date} \n Alojamento: ${findHouse.name}`,
            send: 0,
            user_id: findHouse.user_id,
        });

        return res
            .status(reservationMessage.success.reservationApproval.http)
            .send(reservationMessage.success.reservationApproval);
    } catch (err) {
        console.error("Erro during creation", err);

        return res.status(500).send({error: "Internal server error"});
    }
};

/**
 * Update
 * @author Pedro Martins
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.update = async (req, res) => {
    const {init_date, end_date, user_id, house_id, state_id, services} =
        req.body;
    let reservation;
    try {
        if (
            !req.body.init_date ||
            !req.body.end_date ||
            !req.body.user_id ||
            !req.body.house_id ||
            !req.body.state_id
        ) {
            return res
                .status(reservationMessage.error.fieldMissing.http)
                .send(reservationMessage.error.fieldMissing);
        }

        const {id} = req.params;

        let findUser = await User.findOne({where: {id: user_id}});
        let findHouse = await House.findOne({where: {id: house_id}});
        let findState = await ReservationState.findOne({where: {id: state_id}});

        if (!findUser) {
            return res
                .status(userMessage.error.userDontExist.http)
                .send(userMessage.error.userDontExist);
        }

        if (!findHouse) {
            return res
                .status(houseMessage.error.houseDontExist.http)
                .send(houseMessage.error.houseDontExist);
        }

        if (!findState) {
            return res
                .status(reservationStateMessage.error.reservationStateDontExist.http)
                .send(reservationStateMessage.error.reservationStateDontExist);
        }

        reservation = await Reservation.findOne({where: {id}});
        if (req.body.services) {
            const currentServices = await ReservationServices.findAll({
                where: {reservation_id: reservation.id},
            });
            const currentServiceIds = currentServices.map(
                (service) => service.service_id
            );

            await Promise.all(
                req.body.services.map(async (service) => {
                    const findService = await Service.findOne({
                        where: {name: service.name},
                    });
                    if (findService) {
                        let findHService2 = await HouseServices.findOne({
                            where: {house_id: house_id, service_id: findService.id},
                        });

                        if (findHService2) {
                            service.service = findService.id;
                        } else {
                            return res
                                .status(houseServiceMessage.error.houseServiceDontExist.http)
                                .send(houseServiceMessage.error.houseServiceDontExist);
                        }
                    }
                    const findHouseService = await ReservationServices.findOne({
                        where: {
                            reservation_id: reservation.id,
                            service_id: service.service,
                        },
                    });
                    if (!findHouseService) {
                        await ReservationServices.create({
                            reservation_id: reservation.id,
                            service_id: service.service,
                        });
                    }

                    currentServiceIds.forEach(async (currentServiceId) => {
                        if (
                            !req.body.services.some(
                                (service) => service.service === currentServiceId
                            )
                        ) {
                            await ReservationServices.destroy({
                                where: {
                                    reservation_id: reservation.id,
                                    service_id: currentServiceId,
                                },
                            });
                        }
                    });
                })
            );
        } else
            await ReservationServices.destroy({
                where: {reservation_id: reservation.id},
            });

        const updatedRows = await Reservation.update(
            {
                init_date: req.body.init_date,
                end_date: req.body.end_date,
                user_id: req.body.user_id,
                house_id: req.body.house_id,
                state_id: req.body.state_id,
            },
            {
                where: {id: id},
            }
        );

        if (parseInt(updatedRows)) {
            return res
                .status(reservationMessage.success.reservationUpdated.http)
                .send(reservationMessage.success.reservationUpdated);
        }

        return res
            .status(reservationMessage.error.reservationDontExist.http)
            .send(reservationMessage.error.reservationDontExist);
    } catch (err) {
        console.error("Error during registration", err);

        return res.status(500).send({error: "Internal server error"});
    }
};

/**
 * Update reserva
 * @author Pedro Martins
 * @param req
 * @param res
 * @returns {Promise<*>}
 */

exports.updateReservationState = async (req, res) => {
    try {
        const reservationID = req.params.reservation_id;
        const stateID = req.params.state_id;
        const reservation = await Reservation.findOne({
            where: {id: reservationID},
        });

        if (!reservation) {
            return res
                .status(reservationMessage.error.reservationDontExist.http)
                .send(reservationMessage.error.reservationDontExist);
        }
        if (stateID) {
            reservation.state_id = stateID;
        }

        const updatedReservation = await reservation.update({state_id: stateID});

        let house = await House.findOne({
            where: {id:reservation.house_id},
        });
        if (house) {
            // Enviar notificação de email
            await Notification.create({
                msg: `Reserva Aceite: \n ID da reserva: ${reservation.id} \n Data Início: ${reservation.init_date} \n Data Fim: ${reservation.end_date} \n Alojamento: ${house.name}`,
                send: 0,
                user_id: req.userId,
            });
        }

        if (updatedReservation) {
            return res
                .status(reservationMessage.success.reservationUpdated.http)
                .send(reservationMessage.success.reservationUpdated);
        }
    } catch (err) {
        console.error("Error during update", err);
        return res.status(500).send({error: "Internal server error"});
    }
};

/**
 * Delete
 * @author Pedro Martins
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.delete = async (req, res) => {
    const {id} = req.params;

    try {
        const result = await Reservation.findByPk(id);
        
        if (!result) {
            return res
                .status(reservationMessage.error.reservationDontExist.http)
                .send(reservationMessage.error.reservationDontExist);
        }
        let house = await House.findOne({where: {id: result.house_id}});
        if (house) {
            // Enviar notificação de email
            await Notification.create({
                msg: `Reserva Cancelada: \n ID da reserva: ${result.id} \n Data Início: ${result.init_date} \n Data Fim: ${result.end_date} \n Alojamento: ${house.name}`,
                send: 0,
                user_id: result.user_id,
            });
        }

        await result.destroy();

        return res
            .status(reservationMessage.success.reservationDeleted.http)
            .send(reservationMessage.success.reservationDeleted);
    } catch (err) {
        console.error("Error during process", err);

        return res.status(500).send({error: "Internal server error"});
    }
};

/**
 * Search
 * @author Pedro Martins
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.search = async (req, res) => {
    try {
        let searchFields;
        searchFields = utils.allowFieldsObject(req.body, [
            "house_id",
            "user_id",
            "state_id",
        ]);

        for (let propName in searchFields) {
            if (typeof searchFields[propName] === "string") {
                searchFields[propName] = {
                    $regex: new RegExp(`${searchFields[propName]}.*`, "i"),
                };
            }
        }

        const result = await Reservation.find({
            $or: [searchFields],
        });

        if (!result) {
            return res
                .status(reservationMessage.error.reservationDontExist.http)
                .send(reservationMessage.error.reservationDontExist);
        }
        return res.status(200).send(result);
    } catch (err) {
        console.error("Error during process", err);

        return res.status(500).send({error: "Internal server error"});
    }
};

/**
 * Soft Delete
 * @author Pedro Martins
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.softDelete = async (req, res) => {
    const {id} = req.params;

    try {
        const result = await Reservation.findByPk(id);
        if (!result) {
            return res
                .status(reservationMessage.error.reservationDontExist.http)
                .send(reservationMessage.error.reservationDontExist);
        }

        const cancelState = await ReservationState.findOne({
            where: {state: "Cancelada"},
        });
        // const multa = await Reservation.calculateTotalPrice(
        //   result.house_id,
        //   result.init_date,
        //   result.end_date,
        //   result.services,
        //   House,
        //   Service,
        //   HouseServices
        // );

        if (result.state_id == 1 || result.state_id == 2 || result.state_id == 6) {
            if (
                result &&
                Date.now() > result.init_date &&
                Date.now() < result.end_date
            ) {
                await result.update({state_id: cancelState.id});

                const cancelPrice = await Payment.findOne({
                    where: {reservation_id: id},
                });

                if (cancelPrice) {
                    await cancelPrice.update({
                        state_id: 3,
                        paymentValue: cancelPrice.paymentValue * 0.5,
                    });
                }
            } else if (result) {
                await result.update({state_id: cancelState.id});

                const cancelPrice = await Payment.findOne({
                    where: {reservation_id: id},
                });

                if (cancelPrice) {
                    await cancelPrice.update({
                        state_id: 3,
                    });
                }
            }
        } else {
            return res
                .status(reservationMessage.error.reservationDontExist.http)
                .send(reservationMessage.error.reservationDontExist);
        }

        let house = await House.findOne({where: {id: result.house_id}});
        if (house) {
            // Enviar notificação de email
            await Notification.create({
                msg: `Reserva Cancelada: \n ID da reserva: ${result.id} \n Data Início: ${result.init_date} \n Data Fim: ${result.end_date} \n Alojamento: ${house.name}`,
                send: 0,
                user_id: result.user_id,
            });
        }

        return res
            .status(reservationMessage.success.reservationUpdated.http)
            .send(reservationMessage.success.reservationUpdated);
    } catch (err) {
        console.error("Error during process", err);
        return res.status(500).send({error: "Internal server error"});
    }
};
