const Feedback = require("../models/Feedback");
const reservationMessage = require("../messages/reservationMessage");
const ReservationState = require("../models/ReservationState");
const utils = require('../helpers');
const reservationStateMessage = require("../messages/reservationStateMessage");

/**
 * GET
 * @author Pedro Martins
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.getAllReservationStates = async (req, res) => {
    try {
        const {id} = req.params;
        const reservationStates = await ReservationState.findAll({
            
        });

        if (!reservationStates) {
            return res.status(reservationStateMessage.error.reservationStateDontExist.http).send(reservationStateMessage.error.reservationStateDontExist);
        }

        return res.status(200).send({data: reservationStates});
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
exports.getReservationState = async (req, res) => {
    try {
        const {id} = req.params;
        const reservationState = await ReservationState.findOne({
            where: { id: id },
           
          });
          
        if (!reservationState) {
            return res.status(reservationStateMessage.error.reservationStateDontExist.http).send(reservationStateMessage.error.reservationStateDontExist);
        }

        return res.status(200).send({data: reservationState});
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
        state
    } = req.body;

    try {
        if (!state) {
            return res.status(reservationStateMessage.error.fieldMissing.http).send(reservationStateMessage.error.fieldMissing);
        }
        let reservationState;
        let findState = await ReservationState.findOne({where: { state: state },});

        if (findState) {
            return res.status(reservationStateMessage.error.reservationStateAlreadyRegisted.http).send(reservationStateMessage.error.reservationStateAlreadyRegisted);
        }


        reservationState = await ReservationState.create({
            state
        });
        
        

        await reservationState.save();

        reservationStateMessage.success.reservationStateApproval.data = {
            id: reservationState._id
        };

        return res.status(reservationStateMessage.success.reservationStateApproval.http).send(reservationStateMessage.success.reservationStateApproval);

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
        state
    } = req.body;

    try {
        if(!req.body.state){
            return res.status(reservationMessage.error.fieldMissing.http).send(reservationMessage.error.fieldMissing);
        }

        const { id } = req.params;
        
        let findState = await ReservationState.findOne({where: { state: state }});

        if(findState){
            return res.status(reservationStateMessage.error.reservationStateAlreadyRegisted.http).send(reservationStateMessage.error.reservationStateAlreadyRegisted);
        }

        const updatedRows = await Reservation.update(
            {
                state: req.body.state
            },
            {
                where: { id: id },
            }
        );

        if(parseInt(updatedRows)) {
            return res.status(reservationStateMessage.success.reservationStateUpdated.http).send(reservationStateMessage.success.reservationStateUpdated);
        }

        return res.status(reservationStateMessage.error.reservationStateDontExist.http).send(reservationStateMessage.error.reservationStateDontExist);
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
        const result = await ReservationState.findByPk(id);
        if (!result) {
            return res.status(reservationStateMessage.error.reservationStateDontExist.http).send(reservationStateMessage.error.reservationStateDontExist);
        }
        await result.destroy();
        return res.status(reservationStateMessage.success.reservationStateDeleted.http).send(reservationStateMessage.success.reservationStateDeleted);
    } catch (err) {
        console.error('Error during process', err);

        return res.status(500).send({error: 'Internal server error'});
    }
};