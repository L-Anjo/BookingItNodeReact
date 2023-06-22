const Payment = require("../models/Payment");
const paymentMessage = require("../messages/paymentMessage");
const ReservationMessage = require("../messages/reservationMessage");
const Reservation = require("../models/Reservation");
const PaymentState = require("../models/PaymentState");
const Service = require("../models/Service");
const paymentStateMessage = require("../messages/paymentStateMessage");
const {cleanEmptyFieldsObject} = require("../helpers");
const utils = require('../helpers');

/**
 * GET
 * @author Diogo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.getAllPayments = async (req, res) => {
    try {
        const payment = await Payment.findAll({
            include: [
                {model: PaymentState},
                {model: Reservation},
            ],
        });

        if (!payment) {
            return res.status(paymentMessage.error.paymentDontExist.http).send(paymentMessage.error.paymentDontExist);
        }

        return res.status(200).send({data: payment});
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

exports.getPayment = async (req, res) => {
    try {
        const {id} = req.params;
        const payment = await Payment.findOne({
            where: {id: id},
            include: [
                {model: PaymentState},
                {
                    model: Reservation,
                    include: [
                        {
                            model: Service,
                            attributes: ['id', 'name'],
                            through: {attributes: ['price']},
                        },
                    ]
                },
            ],
        });

        if (!payment) {
            return res.status(paymentMessage.error.paymentDontExist.http).send(paymentMessage.error.paymentDontExist);
        }

        return res.status(200).send({data: payment});
    } catch (err) {
        console.error('Error during registration', err);

        return res.status(500).send({error: 'Internal server error'});
    }
}


/**
 * Create
 * @author Diogo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.create = async (req, res) => {
    const {
        reservation_id,
        state_id,
        creationDate,
        paymentDate,
        paymentMethod,
        paymentValue
    } = req.body;

    try {
        if (!reservation_id || !state_id || !creationDate || !paymentDate || !paymentMethod || !paymentValue) {
            return res.status(paymentMessage.error.fieldMissing.http).send(paymentMessage.error.fieldMissing);
        }
        let payment;
        //
        let findReservation = await Reservation.findOne({where: {id: reservation_id},});
        let findState = await PaymentState.findOne({where: {id: state_id}});

        if (!findReservation) {
            return res.status(ReservationMessage.error.reservationDontExist.http).send(ReservationMessage.error.reservationDontExist);
        }

        if (!findState) {
            return res.status(paymentStateMessage.error.paymentStateDontExist.http).send(paymentStateMessage.error.paymentStateDontExist);
        }

        payment = await Payment.create({
            reservation_id,
            state_id,
            creationDate,
            paymentDate,
            paymentMethod,
            paymentValue
        });

        await payment.save();

        paymentMessage.success.paymentApproval.data = {
            id: payment.id
        };

        return res.status(paymentMessage.success.paymentApproval.http).send(paymentMessage.success.paymentApproval);

    } catch (err) {
        console.error('Erro during creation', err);

        return res.status(500).send({error: 'Internal server error'});
    }
};


/**
 * Update
 * @author Diogo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.update = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const payment = await Payment.findOne({id: id})
        if (!payment) {
            return res.status(paymentMessage.error.paymentDontExist.http).send(paymentMessage.error.paymentDontExist);
        }
        req.body = cleanEmptyFieldsObject(req.body)
        const updatedPayment = await Payment.update(req.body, {
            where: {id: id},
        });

        if (parseInt(updatedPayment)) {
            return res.status(paymentMessage.success.paymentUpdated.http).send(paymentMessage.success.paymentUpdated);
        }

        return res.status(paymentMessage.error.paymentDontExist.http).send(paymentMessage.error.paymentDontExist);
    } catch (err) {
        console.error('Error during update', err);
        return res.status(500).send({error: 'Internal server error'});
    }
};

/**
 * Hard Delete
 * @author Diogo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.hardDelete = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const result = await Payment.destroy({where: {id: id},});
        if (!result) {
            return res.status(paymentMessage.error.paymentDontExist.http).send(paymentMessage.error.paymentDontExist);
        }

        return res.status(paymentMessage.success.paymentDeleted.http).send(paymentMessage.success.paymentDeleted);
    } catch (err) {
        console.error('Error during process', err);

        return res.status(500).send({error: 'Internal server error'});
    }
};


/**
 * Search
 * @author Diogo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.search = async (req, res) => {
    try {

        let searchFields;
        searchFields = utils.allowFieldsObject(req.body, [
            'reservation_id',
            'state_id',
            'creationDate',
            'paymentDate',
            'paymentMethod',
            'paymentValue'
        ]);

        for (let propName in searchFields) {
            if (typeof searchFields[propName] === 'string') {
                searchFields[propName] = {$regex: new RegExp(`${searchFields[propName]}.*`, 'i')};
            }
        }

        const result = await Payment.find({
            $or:
                [
                    searchFields
                ]
        });

        if (!result) {
            return res.status(paymentMessage.error.paymentDontExist.http).send(paymentMessage.error.paymentDontExist);
        }
        return res.status(200).send(result);
    } catch (err) {
        console.error('Error during process', err);

        return res.status(500).send({error: 'Internal server error'});
    }
}

