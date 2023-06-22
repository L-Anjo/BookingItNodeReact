const Service = require("../models/Service");
//const PostalCode = require('../models/postalCodeSchema');
//const StatusHouse = require('../models/statusHouseSchema');
const {body, validationResult} = require("express-validator");
const serviceMessage = require('../messages/serviceMessage');

/**
 * GET
 * @author Diogo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.getAllServices = async (req, res) => {
    try {
        const service = await Service.findAll({
            include: [],
        });

        if (!service) {
            return res.status(serviceMessage.error.serviceDontExist.http).send(serviceMessage.error.serviceDontExist);
        }

        return res.status(200).send({data: service});
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
exports.getService = async (req, res) => {
    try {
        const {id} = req.params;
        const service = await Service.findOne({
            where: {id: id},
            include: [],
        });

        if (!service) {
            return res.status(serviceMessage.error.serviceDontExist.http).send(serviceMessage.error.serviceDontExist);
        }

        return res.status(200).send({data: service});
    } catch (err) {
        console.error('Error during registration', err);

        return res.status(500).send({error: 'Internal server error'});
    }
}

/**
 * Create
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.create = async (req, res) => {
    const {name, state} = req.body;


    try {
        if (!name) {
            return res.status(serviceMessage.error.fieldMissing.http).send(serviceMessage.error.fieldMissing);
        }

        //let findCodPostal = await PostalCode.findOne({postalCode});


        let service = await Service.findOne({where: {name: name},});
        if (service) {
            return res.status(serviceMessage.error.serviceAlreadyRegisted.http).send(serviceMessage.error.serviceAlreadyRegisted);
        }

        service = await Service.create({name, state: 0});

        if (service === false) {
            return res.status(serviceMessage.error.fieldMissing.http).send(serviceMessage.error.fieldMissing);
        }

        return res.status(serviceMessage.success.serviceApproval.http).send(serviceMessage.success.serviceApproval);
    } catch (err) {
        console.error('Erro during creation', err);

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
        if (!req.body.name) {
            return res.status(serviceMessage.error.fieldMissing.http).send(serviceMessage.error.fieldMissing);
        }
        const {id} = req.params;

        const service = await Service.update(
            req.body,
            {where: {id: id}}
        );


        if (service[0] !== 0) {
            return res.status(serviceMessage.success.serviceUpdated.http).send(serviceMessage.success.serviceUpdated);
        }

        return res.status(serviceMessage.error.serviceDontExist.http).send(serviceMessage.error.serviceDontExist);
    } catch (err) {
        console.error('Error during update', err);

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
exports.updateStateService = async (req, res) => {
    try {
        const service = await Service.findOne({where: {id: parseInt(req.params.id)}});

        if (!service) {
            return res.status(serviceMessage.error.serviceDontExist.http).send(serviceMessage.error.serviceDontExist);
        }

        const {state_id} = req.params;

        const updatedRows = await service.update(
            {
                state: state_id
            }
        );

        if (updatedRows) {
            return res.status(serviceMessage.success.serviceUpdated.http).send(serviceMessage.success.serviceUpdated);
        }

        return res.status(serviceMessage.error.serviceDontExist.http).send(serviceMessage.error.serviceDontExist);
    } catch (err) {
        console.error('Error during update', err);
        return res.status(500).send({error: 'Internal server error'});
    }
};

/**
 * Delete
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.delete = async (req, res) => {
    const {id} = req.params;

    try {
        const result = await Service.destroy({where: {id: id},});
        if (!result) {
            return res.status(serviceMessage.error.serviceDontExist.http).send(serviceMessage.error.serviceDontExist);
        }

        return res.status(serviceMessage.success.serviceDeleted.http).send(serviceMessage.success.serviceDeleted);
    } catch (err) {
        console.error('Error during process', err);

        return res.status(500).send({error: 'Internal server error'});
    }
};
