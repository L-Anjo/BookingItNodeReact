const  StatusHouse = require("../models/StatusHouse");
const  statusHouseMessage  = require("../messages/statusHouseMessage");
const {isEmpty} = require("lodash/lang");

/**
 * Get
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.getAll = async (req, res) => {
    try {
        const houseStatus = await StatusHouse.findAll();

        if (!houseStatus) {
            return res.status(statusHouseMessage.error.statusHouseDontExist.http).send(statusHouseMessage.error.statusHouseDontExist);
        }

        return res.status(statusHouseMessage.success.statusHouseApproval.http).send({data: houseStatus});
    } catch (err) {
        console.error('Error during GET', err);

        return res.status(500).send({error: 'Internal server error'});
    }
};

/**
 * Insert
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.create = async (req, res) => {
    const {status} = req.body;

    try {
        if (!status){
            return res.status(statusHouseMessage.error.fieldMissing.http).send(statusHouseMessage.error.fieldMissing);
        }

        let findStatus = await StatusHouse.findOne({where: { status: status },});
        if (findStatus) {
            return res.status(statusHouseMessage.error.statusHouseAlreadyRegisted.http).send(statusHouseMessage.error.statusHouseAlreadyRegisted);
        }
        
        findStatus = await StatusHouse.create({status});

        if(findStatus === false){
            return res.status(statusHouseMessage.error.fieldMissing.http).send(statusHouseMessage.error.fieldMissing);
        }

        return res.status(statusHouseMessage.success.statusHouseApproval.http).send(statusHouseMessage.success.statusHouseApproval);
    } catch (err) {
        console.error('Error during creation', err);

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
        const result = await StatusHouse.destroy({where: { id: id },});
        if (!result) {
            return res.status(statusHouseMessage.error.statusHouseDontExist.http).send(statusHouseMessage.error.statusHouseDontExist);
        }
        return res.status(statusHouseMessage.success.statusHouseDeleted.http).send(statusHouseMessage.success.statusHouseDeleted);
    } catch (err) {
        console.error('Error during process', err);
        return res.status(500).send({error: 'Internal server error'});
    }
};
