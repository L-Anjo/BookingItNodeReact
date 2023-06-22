const  PostalCode = require("../models/PostalCode");
const postalCodeMessage = require("../messages/postalCodeMessage");
const {isEmpty} = require("lodash/lang");


/**
 * Create
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.create = async (req, res) => {
    const {postalCode, concelho, district} = req.body;

    try {
        if (!postalCode || !concelho || !district){
            return res.status(postalCodeMessage.error.fieldMissing.http).send(postalCodeMessage.error.fieldMissing);
        }

        let findpostalCode = await PostalCode.findOne({where: { postalCode: postalCode },});
        if (findpostalCode) {
            return res.status(postalCodeMessage.error.postalCodeAlreadyRegisted.http).send(postalCodeMessage.error.postalCodeAlreadyRegisted);
        }
        
         findpostalCode = await PostalCode.create({postalCode, concelho, district});
        
        if(findpostalCode === false){
            return res.status(postalCodeMessage.error.fieldMissing.http).send(postalCodeMessage.error.fieldMissing);
        }

        return res.status(postalCodeMessage.success.postalCodeApproval.http).send(postalCodeMessage.success.postalCodeApproval);
    } catch (err) {
        console.error('Error during creation', err);

        return res.status(500).send({error: 'Internal server error'});
    }
};

/**
 * Get
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.get = async (req, res) => {
    try {
        const {id} = req.params;
        const code = await PostalCode.findOne({
            where: { postalCode : id }
        });

        if (!code) {
            return res.status(postalCodeMessage.error.postalCodeDontExist.http).send(postalCodeMessage.error.postalCodeDontExist);
        }

        return res.status(postalCodeMessage.success.postalCodeExists.http).send({data: code});

    } catch (err) {
        console.error('Error during query', err);

        return res.status(500).send({error: 'Internal server error'});
    }
};

/**
 * Update
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.update = async (req, res) => {
    try {
        if (!req.body.postalCode || !req.body.concelho || !req.body.district){
            return res.status(postalCodeMessage.error.fieldMissing.http).send(postalCodeMessage.error.fieldMissing);
        }
        const postalCodee = await PostalCode.update(
            req.body,
            { where: { postalCode: req.body.postalCode } }
        );

        if(postalCodee[0] !== 0) {//Se for diferente de 0 é porque pelo menos um existe
            return res.status(postalCodeMessage.success.postalCodeUpdated.http).send(postalCodeMessage.success.postalCodeUpdated);
        }

        return res.status(postalCodeMessage.error.postalCodeDontExist.http).send(postalCodeMessage.error.postalCodeDontExist);
    } catch (err) {
        console.error('Error during update', err);

        return res.status(500).send({error: 'Internal server error'});
    }
};


/**
 * Hard Delete
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.hardDelete = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const result = await PostalCode.destroy({where: { postalCode: id },});
        if (!result) {
            return res.status(postalCodeMessage.error.postalCodeDontExist.http).send(postalCodeMessage.error.postalCodeDontExist);
        }

        return res.status(postalCodeMessage.success.postalCodeUpdated.http).send(postalCodeMessage.success.postalCodeUpdated);
    } catch (err) {
        console.error('Error during process', err);

        return res.status(500).send({error: 'Internal server error'});
    }
};
