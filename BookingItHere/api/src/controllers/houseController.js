const House = require("../models/House");
const houseMessage = require("../messages/houseMessage");
const PostalCode = require("../models/PostalCode");
const Feedback = require("../models/Feedback");
const Announcement = require("../models/Announcement");
const Payment = require("../models/Payment");
const StatusHouse = require("../models/StatusHouse");
const User = require("../models/User");
const Service = require('../models/Service');
const HouseServices = require("../models/HouseServices");
const Reservation = require("../models/Reservation");
const utils = require('../helpers');
const {Op} = require("sequelize");
const {cleanEmptyFieldsObject} = require("../helpers");
const {now} = require("sequelize/lib/utils");
const { find } = require("lodash");

/**
 * GET
 * @author Luís Anjo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.getAllHouses = async (req, res, status = {[Op.or]: [2,3]}) => {
    try {
        const house = await House.findAll({
            where: {
                status: status
            },
            include: [
                //   { model: Reservation, required: false, include: [{ model: Feedback }] },
                {model: PostalCode},
                {model: StatusHouse},
                {
                    model: User,
                    attributes: ['id', 'name', 'email'],
                },
                {
                    model: Service,
                    attributes: ['id', 'name'],
                    through: {attributes: []}, // para não mostrar informações da tabela intermediária
                },
                {
                    model: Reservation,
                    attributes: ['id'], //Traz quem reservou
                    required: false,
                    include: [
                        {
                            model: Feedback, // Incluindo o modelo Feedback dentro de Reservation
                            attributes: ['classification'], // Atributos do modelo Feedback
                        },
                    ],
                }
            ],
            attributes: {exclude: ['createdAt', 'updatedAt']},
        });

        if (!house) {
            return res.status(houseMessage.error.houseDontExist.http).send(houseMessage.error.houseDontExist);
        }

        return res.status(200).send({data: house});
    } catch (err) {
        console.error('Error during registration', err);

        return res.status(500).send({error: 'Internal server error'});
    }
}

/**
 * GET
 * @author Luís Anjo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.getHouse = async (req, res) => {
    try {
        const {id} = req.params;
        const house = await House.findOne({
            where: {id: id},
            include: [
                {
                    model: Reservation,
                    attributes: ['id', 'user_id'], //Traz quem reservou
                    required: false,
                    include: [
                        {
                            model: User,
                            attributes: ['id', 'name'],
                        },
                    ],
                },
                {
                    model: Reservation,
                    attributes: ['id', 'user_id'], //Traz quem reservou
                    required: false,
                    include: [
                        {
                            model: Feedback, // Incluindo o modelo Feedback dentro de Reservation
                        },
                    ],
                },
                {model: PostalCode},
                {model: StatusHouse},
                {
                    model: User,
                    attributes: ['id', 'name', 'email'],
                },
                {
                    model: Service,
                    attributes: ['id', 'name'],
                    through: {attributes: ['price']},
                },
                {
                    model: Announcement,
                    as: "Announcements",
                    required: false,
                    attributes: ['id', 'priceClick'],
                    where: {
                        end_date: {[Op.gte]: now()},
                        numb_clicks: {[Op.gt]: 0},
                        state: 1
                    }
                }
            ],
        });

        if (!house) {
            return res.status(houseMessage.error.houseDontExist.http).send(houseMessage.error.houseDontExist);
        }

        return res.status(200).send({data: house});
    } catch (err) {
        console.error('Error during registration', err);

        return res.status(500).send({error: 'Internal server error'});
    }
}

/**
 * Create
 * @author Luís Anjo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.create = async (req, res) => {
    const {
        name,
        doorNumber,
        floorNumber,
        price,
        guestsNumber,
        status,
        postalCode,
        user_id,
        road,
        propertyAssessment,
        concelho,
        district,
        services
    } = req.body;


    try {
        if (!name || !doorNumber || !floorNumber || !price || !guestsNumber || !postalCode || !road || !propertyAssessment || !concelho || !district) {
            return res.status(houseMessage.error.fieldMissing.http).send(houseMessage.error.fieldMissing);
        }

        let findCodPostal = await PostalCode.findOne({where: {postalCode: postalCode},});

        if (!findCodPostal) {
            findCodPostal = await PostalCode.create({postalCode, concelho, district});
        }
        let house = await House.findOne({where: {postalCode: findCodPostal.postalCode, propertyAssessment},});
        if (house) {
            return res.status(houseMessage.error.houseAlreadyRegisted.http).send(houseMessage.error.houseAlreadyRegisted);
        }

        house = await House.create({
            name,
            doorNumber,
            floorNumber,
            price,
            guestsNumber,
            status: 1,
            postalCode: findCodPostal.postalCode,
            user_id: req.userId,
            road,
            propertyAssessment
        });

        if (services) {
            await Promise.all(services.map(async service => {
                let findService = await Service.findOne({where: {name: service.name}});

                if (!findService) {
                    findService = await Service.create({name: service.name});
                }

                if (findService) {
                    const houseService = await HouseServices.create({
                        house_id: house.id,
                        service_id: findService.id,
                        price: service.price,
                    });
                }

            }))
        }

        const findUser = await User.findByPk(req.userId);
        if (parseInt(findUser.user_type_id) === 1) {
            await findUser.update({user_type_id: 2});
        }
        await house.save();

        houseMessage.success.houseApproval.data = {
            id: house.id
        };

        return res.status(houseMessage.success.houseApproval.http).send(houseMessage.success.houseApproval);

    } catch (err) {
        console.error('Erro during creation', err);

        return res.status(500).send({error: 'Internal server error'});
    }
};

/**
 * Update
 * @author Luís Anjo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.update = async (req, res) => {
    try {
        const {id} = req.params;
        const house = await House.findOne({where: {id: id}});
        if (!house) {
            return res.status(houseMessage.error.houseDontExist.http).send(houseMessage.error.houseDontExist);
        }
        req.body = cleanEmptyFieldsObject(req.body)
        let findCodPostal = null;
        if (req.body.postalCode) {
            findCodPostal = await PostalCode.findOne({where: {postalCode: req.body.postalCode}});
            if (!findCodPostal) {
                const {concelho, district} = req.body;
                findCodPostal = await PostalCode.create({postalCode: req.body.postalCode, concelho, district});

                req.body.postalCode = findCodPostal.postalCode;
            } else
                req.body.postalCode = findCodPostal.postalCode;

            const houseWithSamePostalCode = await House.findOne({
                where: {
                    propertyAssessment: req.body.propertyAssessment,
                    postalCode: findCodPostal.postalCode
                }
            });
            if (houseWithSamePostalCode && houseWithSamePostalCode.id !== house.id) {
                return res.status(houseMessage.error.houseAlreadyRegisted.http).send(houseMessage.error.houseAlreadyRegisted);
            }
        }

        if (req.body.services) {
            const currentServices = await HouseServices.findAll({where: {house_id: house.id}});
            const currentServiceIds = currentServices.map(service => service.service_id);

            // Procura e cria novos serviços
            await Promise.all(req.body.services.map(async (service) => {
                const findService = await Service.findOne({where: {name: service.name}});
                if (!findService) {
                    const newService = await Service.create({name: service.name});
                    service.service = newService.id;
                } else {
                    service.service = findService.id;
                }

                const findHouseService = await HouseServices.findOne({
                    where: {
                        house_id: house.id,
                        service_id: service.service
                    }
                });
                if (!findHouseService) {
                    await HouseServices.create({house_id: house.id, service_id: service.service, price: service.price});
                } else {
                    await HouseServices.update({price: service.price}, {
                        where: {
                            house_id: house.id,
                            service_id: service.service
                        }
                    });
                }

                // Remove a associação da tabela intermediária se o serviço não estiver mais associado à casa
                currentServiceIds.forEach(async (currentServiceId) => {
                    if (!req.body.services.some(service => service.service === currentServiceId)) {
                        await HouseServices.destroy({where: {house_id: house.id, service_id: currentServiceId}});
                    }
                });
            }));
        } else
            await HouseServices.destroy({where: {house_id: house.id}});

        const updatedHouse = await House.update(req.body,
            {where: {id: id}}
        );

        if (updatedHouse) {
            return res.status(houseMessage.success.houseUpdated.http).send(houseMessage.success.houseUpdated);
        }

        return res.status(houseMessage.error.houseDontExist.http).send(houseMessage.error.houseDontExist);
    } catch (err) {
        console.error('Error during update', err);
        return res.status(500).send({error: 'Internal server error'});
    }
};

/**
 * Update
 * @author Luís Anjo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.updateImages = async (req, res) => {
    try {
        const {id} = req.params;
        const house = await House.findOne({where: {id: id}});
        if (!house) {
            return res.status(houseMessage.error.houseDontExist.http).send(houseMessage.error.houseDontExist);
        }
        req.body = cleanEmptyFieldsObject(req.body)

        const updatedHouse = await House.update(req.body,
            {where: {id: id}}
        );

        if (updatedHouse) {
            return res.status(houseMessage.success.houseUpdated.http).send(houseMessage.success.houseUpdated);
        }

        return res.status(houseMessage.error.houseDontExist.http).send(houseMessage.error.houseDontExist);
    } catch (err) {
        console.error('Error during update', err);
        return res.status(500).send({error: 'Internal server error'});
    }
};

/**
 * Update
 * @author Luís Anjo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.updateStateH = async (req, res) => {
    try {
        const house = await House.findOne({where: {id: parseInt(req.params.id)}});
        let statusId = req.params.status_id ?? 2;
        if (!house) {
            return res.status(houseMessage.error.houseDontExist.http).send(houseMessage.error.houseDontExist);
        }

        const houseStatus = await StatusHouse.findByPk(statusId)
        if (!houseStatus) {
            return res.status(houseMessage.error.houseStatusDontExist.http).send(houseMessage.error.houseStatusDontExist);
        }


        const updatedHouse = await house.update({status: statusId});
        if (updatedHouse) {
            if (statusId == 2) {
                const houseServices = await HouseServices.findAll({where: {house_id: house.id}});

                await Promise.all(houseServices.map(async (houseService) => {
                    const service = await Service.findByPk(houseService.service_id);
                    const updatedService = await service.update({state: 1});
                }));
            }

            return res.status(houseMessage.success.houseUpdated.http).send(houseMessage.success.houseUpdated);
        }

        return res.status(houseMessage.error.houseDontExist.http).send(houseMessage.error.houseDontExist);
    } catch (err) {
        console.error('Error during update', err);
        return res.status(500).send({error: 'Internal server error'});
    }
};

/**
 * Hard Delete
 * @author Luís Anjo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.hardDelete = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const house = await House.findByPk(id)
        const findAnnouncement = await Announcement.findOne({
            where:{house_id: house.id}
        })

        if (!house) {
            return res.status(houseMessage.error.houseDontExist.http).send(houseMessage.error.houseDontExist);
        }

        const activeReservations = await Reservation.findAll({
            where: {
                house_id: house.id,
                state_id: {
                    [Op.or]: [1, 2, 6]
                }
            }
        });

        


        if (activeReservations.length > 0) {
            for (const activeReservation of activeReservations) {

                const updateReservation = await activeReservation.update({
                    state_id: 5,
                })

                const payment = await Payment.findOne({
                    where: {
                        reservation_id: activeReservation.id
                    }
                });

                if (payment) {
                    const editPayment = await payment.update({
                        userId: activeReservation.userId,
                        paymentValue: payment.amount,
                        creationDate: new Date(),
                        paymentDate: new Date(),
                        paymentMethod: payment.paymentMethod,
                        reservation_id: activeReservation.id,
                        state_id: 3,
                    });
                }
            }
        }

        if(findAnnouncement){
            await findAnnouncement.destroy();
        }


        await house.destroy();

        return res.status(houseMessage.success.houseDeleted.http).send(houseMessage.success.houseDeleted);
    } catch (err) {
        console.error('Error during process', err);

        return res.status(500).send({error: 'Internal server error'});
    }
};

/**
 * Search
 * @author João Ponte
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.search = async (req, res) => {
    try {

        let searchFields;
        searchFields = utils.allowFieldsObject(req.body, [
            'name',
            'guestsNumber',
            'postalCode',
            'road',
            'concelho',
            'district',
            'status',
            'checkin',
            'checkout'
        ]);

        searchFields = utils.cleanEmptyFieldsObject(searchFields);

        let and = [];
        let or = [];

        if(searchFields['checkin'] && searchFields['checkout'] && (new Date(searchFields['checkin'])).getTime() > (new Date(searchFields['checkout'])).getTime()){
            return res.status(houseMessage.error.houseStatusDontExist.http).send(houseMessage.error.houseStatusDontExist);
        }

        for (let propName in searchFields) {
            if (propName === 'name') {
                and['name'] = {[Op.like]: `${searchFields['name']}%` ?? ''};
                if (searchFields['checkin'] && searchFields['checkout']) {
                    and['$Reservations.init_date$'] = {[Op.notBetween]: [searchFields['checkin'], searchFields['checkout']]};
                    and['$Reservations.end_date$'] = {[Op.notBetween]: [searchFields['checkin'], searchFields['checkout']]};
                }
                or['$PostalCode.concelho$'] = {[Op.like]: `${searchFields['name']}%`} ?? '';
                continue;
            }

            if (propName === 'guestsNumber') {
                and[propName] = {[Op.gte]: parseInt(searchFields[propName])};
                continue;
            }
        }

        const result = await House.findAll({
            where: {
                status: 2,
                [Op.or]: {
                    [Op.and]: Object.assign({}, and),
                    [Op.or]: Object.assign({}, or)
                }
            },
            include: [
                {
                    model: PostalCode,
                    as: "PostalCode",
                    required: true
                },
                {
                    model: Reservation,
                    as: "Reservations",
                    required: false,
                    attributes: ['house_id']
                },
                {
                    model: Announcement,
                    as: "Announcements",
                    required: false,
                    attributes: ['priceClick'],
                    where: {
                        end_date: {[Op.gte]: now()},
                        numb_clicks: {[Op.gt]: 0},
                        state: 1
                    }
                }
            ],
            order: [
                [Announcement, 'priceClick', 'DESC']
            ]
        });

        if (!result) {
            return res.status(houseMessage.error.houseDontExist.http).send(houseMessage.error.houseDontExist);
        }
        return res.status(200).send(result);
    } catch (err) {
        console.error('Error during process', err);

        return res.status(500).send({error: 'Internal server error'});
    }
}

/**
 * GET ReservationFromHouse
 *
 * @author Diogo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.getReservationFromHouse = async (req, res) => {
    try {
        const {id} = req.params;
        const house = await House.findOne({
            where: {id: id},
            include: [
                {model: PostalCode},
                {model: StatusHouse},
                {model: Reservation},
            ],
        });
        if (!house) {
            return res.status(houseMessage.error.houseDontExist.http).send(houseMessage.error.houseDontExist);
        }

        return res.status(200).send({data: house});
    } catch (err) {
        console.error('Error during registration', err);

        return res.status(500).send({error: 'Internal server error'});
    }
}
