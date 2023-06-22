const Feedback = require("../models/Feedback");
const feedbackMessage = require("../messages/feedbackMessage");
const reservationMessage = require("../messages/reservationMessage");
const Reservation = require("../models/Reservation");
const utils = require('../helpers');
const User = require("../models/User");
const ReservationState = require("../models/ReservationState");
const House = require("../models/House");

/**
 * GET
 * @author Diogo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.getAllFeedbacks = async (req, res) => {
    try {
        const feedback = await Feedback.findAll({
            include: [
                { model: Reservation,
                    include: [
                        {
                          model: User,
                        },
                        {
                            model: House,
                        },
                      ],
                 },
              ],
          });

        if (!feedback) {
            return res.status(feedbackMessage.error.feedbackDontExist.http).send(feedbackMessage.error.feedbackDontExist);
        }

        return res.status(200).send({data: feedback});
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
exports.getFeedback = async (req, res) => {
    try {
        const {id} = req.params;
        const feedback = await Feedback.findOne({
            where: { id: id },
            include: [
              { model: Reservation},

            ],
          });
          
        if (!feedback) {
            return res.status(feedbackMessage.error.feedbackDontExist.http).send(feedbackMessage.error.feedbackDontExist);
        }

        return res.status(200).send({data: feedback});
    } catch (err) {
        console.error('Error during registration', err);

        return res.status(500).send({error: 'Internal server error'});
    }
}


/**
 * Create
 * @author Pedro Martins
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.create = async (req, res) => {
    const {
        reservation,
        comment,
        classification
    } = req.body;

    try {
        if (!reservation || !comment || !classification ) {
            return res.status(feedbackMessage.error.fieldMissing.http).send(feedbackMessage.error.fieldMissing);
        }
        let feedback;
        let reservationUpdate;
        let findReservation = await Reservation.findOne({where: { id: reservation },});
        const avaliadaState = await ReservationState.findOne({ where: { state: "Avaliada" } });

        if (!findReservation) {
            return res.status(reservationMessage.error.reservationDontExist.http).send(reservationMessage.error.reservationDontExist);
        }


        //const statusSusp = await StatusHouse.findOne({status: "Suspenso"});
        feedback = await Feedback.create({
            reservation: reservation,
            comment,
            classification
        });
        
        reservationUpdate = await Reservation.update(
            { state_id: avaliadaState.id }, 
            { where: { id: reservation } }
          );

        

        await feedback.save();

        feedbackMessage.success.feedbackApproval.data = {
            id: feedback.id
        };

        return res.status(feedbackMessage.success.feedbackApproval.http).send(feedbackMessage.success.feedbackApproval);

    } catch (err) {
        console.error('Erro during creation', err);

        return res.status(500).send({error: 'Internal server error'});
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
    const {
        comment,
        classification
    } = req.body;

    try {
        if(!req.body.comment || !req.body.classification){
            return res.status(feedbackMessage.error.fieldMissing.http).send(feedbackMessage.error.fieldMissing);
        }

        const { id } = req.params;

        const updatedRows = await Feedback.update(
            {
                comment: comment,
                classification: classification
            },
            {
                where: { id: id },
            }
        );

        if(parseInt(updatedRows)) {
            return res.status(feedbackMessage.success.feedbackUpdated.http).send(feedbackMessage.success.feedbackUpdated);
        }

        return res.status(feedbackMessage.error.feedbackDontExist.http).send(feedbackMessage.error.feedbackDontExist);
    } catch (err) {
        console.error('Error during registration', err);

        return res.status(500).send({error: 'Internal server error'});
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
        const result = await Feedback.findByPk(id);
        if (!result) {
            return res.status(feedbackMessage.error.feedbackDontExist.http).send(feedbackMessage.error.feedbackDontExist);
        }
        await result.destroy();
        return res.status(feedbackMessage.success.feedbackDeleted.http).send(feedbackMessage.success.feedbackDeleted);
    } catch (err) {
        console.error('Error during process', err);

        return res.status(500).send({error: 'Internal server error'});
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
            'reservation',
            'classification'
        ]);

        for (let propName in searchFields) {
            if (typeof searchFields[propName] === 'string') {
                searchFields[propName] = {$regex: new RegExp(`${searchFields[propName]}.*`, 'i')};
            }
        }

        const result = await Feedback.find({
            $or:
                [
                    searchFields
                ]
        });

        if (!result) {
            return res.status(feedbackMessage.error.feedbackDontExist.http).send(feedbackMessage.error.feedbackDontExist);
        }
        return res.status(200).send(result);
    } catch (err) {
        console.error('Error during process', err);

        return res.status(500).send({error: 'Internal server error'});
    }
}
