const Notification = require("../models/Notification");
const notificationMessage = require("../messages/notificationMessage");
const User = require("../models/User");
const userMessage = require("../messages/userMessage")

/**
 * Create
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.create = async (req, res) => {
    const {msg, send, userId} = req.body;
    try {
        if (!msg || !userId) {
            return res.status(notificationMessage.error.fieldMissing.http).send(notificationMessage.error.fieldMissing);
        }

        let findUser = await User.findOne({where: {id: userId},});
        if (!findUser) {
            return res.status(userMessage.error.userDontExist.http).send(userMessage.error.userDontExist);
        }
        notify = await Notification.create({msg, send, user_id:userId});

        return res.status(notificationMessage.success.notificationApproval.http).send(notificationMessage.success.notificationApproval);
    } catch (err) {
        console.error('Error during creation', err);

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
        if (!req.body.msg || !req.body.userId) {
            return res.status(notificationMessage.error.fieldMissing.http).send(notificationMessage.error.fieldMissing);
        }
        const notify = await Notification.update(
            req.body,
            {where: {id: req.params.id}}
        );

        if (notify[0] !== 0) {//Se for diferente de 0 é porque pelo menos um existe
            return res.status(notificationMessage.success.notificationUpdated.http).send(notificationMessage.success.notificationUpdated);
        }

        return res.status(notificationMessage.error.notificationDontExist.http).send(notificationMessage.error.notificationDontExist);
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
        const result = await Notification.destroy({where: {id: id},});
        if (!result) {
            return res.status(notificationMessage.error.notificationDontExist.http).send(notificationMessage.error.notificationDontExist);
        }

        return res.status(notificationMessage.success.notificationUpdated.http).send(notificationMessage.success.notificationUpdated);
    } catch (err) {
        console.error('Error during process', err);

        return res.status(500).send({error: 'Internal server error'});
    }
};
