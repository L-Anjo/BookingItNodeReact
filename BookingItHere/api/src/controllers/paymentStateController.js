const paymentMessage = require("../messages/paymentMessage");
const PaymentState = require("../models/PaymentState");
const utils = require('../helpers');
const paymentStateMessage = require("../messages/paymentStateMessage");

/**
 * GET
 * @author Diogo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.getPaymentState = async (req, res) => {
    try {
        const {id} = req.params;
        const paymentState = await PaymentState.findOne({
            where: { id: id },
           
          });
          
        if (!paymentState) {
            return res.status(paymentStateMessage.error.paymentStateDontExist.http).send(paymentStateMessage.error.paymentStateDontExist);
        }

        return res.status(200).send({data: paymentState});
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
        state
    } = req.body;

    try {
        if (!state) {
            return res.status(paymentStateMessage.error.fieldMissing.http).send(paymentStateMessage.error.fieldMissing);
        }
        let paymentState;
        let findState = await PaymentState.findOne({where: { state: state },});

        if (findState) {
            return res.status(paymentStateMessage.error.paymentStateAlreadyRegisted.http).send(paymentStateMessage.error.paymentStateAlreadyRegisted);
        }


        paymentState = await PaymentState.create({
            state
        });
        
        

        await paymentState.save();

        paymentStateMessage.success.paymentStateApproval.data = {
            id: paymentState._id
        };

        return res.status(paymentStateMessage.success.paymentStateApproval.http).send(paymentStateMessage.success.paymentStateApproval);

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
    const {
        state
    } = req.body;

    try {
        if(!req.body.state){
            return res.status(paymentMessage.error.fieldMissing.http).send(paymentMessage.error.fieldMissing);
        }

        const { id } = req.params;
        
        let findState = await PaymentState.findOne({where: { state: state }});

        if(findState){
            return res.status(paymentStateMessage.error.paymentStateAlreadyRegisted.http).send(paymentStateMessage.error.paymentStateAlreadyRegisted);
        }

        const updatedRows = await Payment.update(
            {
                state: req.body.state
            },
            {
                where: { id: id },
            }
        );

        if(parseInt(updatedRows)) {
            return res.status(paymentStateMessage.success.paymentStateUpdated.http).send(paymentStateMessage.success.paymentStateUpdated);
        }

        return res.status(paymentStateMessage.error.paymentStateDontExist.http).send(paymentStateMessage.error.paymentStateDontExist);
    } catch (err) {
        console.error('Error during registration', err);

        return res.status(500).send({error: 'Internal server error'});
    }
};


/**
 * Delete
 * @author Diogo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.delete = async (req, res) => {
    const {id} = req.params;

    try {
        const result = await PaymentState.findByPk(id);
        if (!result) {
            return res.status(paymentStateMessage.error.paymentStateDontExist.http).send(paymentStateMessage.error.paymentStateDontExist);
        }
        await result.destroy();
        return res.status(paymentStateMessage.success.paymentStateDeleted.http).send(paymentStateMessage.success.paymentStateDeleted);
    } catch (err) {
        console.error('Error during process', err);

        return res.status(500).send({error: 'Internal server error'});
    }
};