const AnnouncementPayment = require("../models/AnnouncementPayment");
const Announcement = require("../models/Announcement");
const utils = require('../helpers');
const announcementPaymentMessage = require("../messages/announcementPaymentMessage");
const announcementMessage = require("../messages/announcementMessage");

/**
 * GET
 * @author Pedro Martins
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.getAnnouncementPayment = async (req, res) => {
    try {
        const {id} = req.params;
        const announcementPayment = await AnnouncementPayment.findOne({
            where: { id: id },
            include: [
                { model: Announcement },
            ],
          });
          
        if (!announcementPayment) {
            return res.status(announcementPaymentMessage.error.announcementPaymentDontExist.http).send(announcementPaymentMessage.error.announcementPaymentDontExist);
        }

        return res.status(200).send({data: announcementPayment});
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
        announcement,
        status,
        creationDate,
        paymentDate,
        paymentMethod,
        paymentValue
    } = req.body;

    try {
        if (!announcement || !status || !creationDate || !paymentDate|| !paymentMethod || !paymentValue) {
            return res.status(announcementPaymentMessage.error.fieldMissing.http).send(announcementPaymentMessage.error.fieldMissing);
        }

        let announcementPayment
        let findAnnouncement = await Announcement.findOne({where: { id: announcement },});
        
        if (!findAnnouncement) {
            return res.status(announcementMessage.error.announcementDontExist.http).send(announcementMessage.error.announcementDontExist);
        }

        announcementPayment = await AnnouncementPayment.create({
            announcement,
            status,
            creationDate,
            paymentDate,
            paymentMethod,
            paymentValue
        });

        announcementPaymentMessage.success.announcementPaymentApproval.data = {
            id: announcementPayment._id
        };

        
        return res.status(announcementPaymentMessage.success.announcementPaymentApproval.http).send(announcementPaymentMessage.success.announcementPaymentApproval);

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
        
        const announcementPayment = await AnnouncementPayment.findOne({id: id})
        if (!announcementPayment ) {
            return res.status(announcementPaymentMessage.error.announcementPaymentDontExist.http).send(announcementPaymentMessage.error.announcementPaymentDontExist);
        }

        const updatedPayment = await AnnouncementPayment.update(req.body, {
            where: { id: id },
          });

        if (parseInt(updatedPayment)) {
            return res.status(announcementPaymentMessage.success.announcementPaymentUpdated.http).send(announcementPaymentMessage.success.announcementPaymentUpdated);
        }

        return res.status(announcementPaymentMessage.error.announcementPaymentDontExist.http).send(announcementPaymentMessage.error.announcementPaymentDontExist);
    } catch (err) {
        console.error('Error during update', err);
        return res.status(500).send({error: 'Internal server error'});
    }
};



/**
 * Hard Delete
 * @author Pedro Martins
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.hardDelete = async (req, res) => {
    const {id} = req.params;

    try {
        const result = await AnnouncementPayment.findByPk(id);
        if (!result) {
            return res.status(announcementPaymentMessage.error.announcementPaymentDontExist.http).send(announcementPaymentMessage.error.announcementPaymentDontExist);
        }
        await result.destroy();
        return res.status(announcementPaymentMessage.success.announcementPaymentDeleted.http).send(announcementPaymentMessage.success.announcementPaymentDeleted);
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
            'status',
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
