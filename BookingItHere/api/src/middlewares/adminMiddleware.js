const User = require("../models/User");

/**
 * Admin Middleware
 *
 * @author João Ponte
 * @param req
 * @param res
 * @param next
 * @returns {Promise<*>}
 */
module.exports = async (req, res, next) => {
    try {
        if (!req.userPerms) {
            return res.status(401).send({ error: 'Unauthorized' });
        }

        const user = await User.findByPk(req.userId);

        if (!user || parseInt(user.user_type_id) < 3) {
            req.userPerms = user.user_type_id;
            return res.status(401).send({ error: 'Unauthorized' });
        }

        req.userPerms = user.user_type_id;
        next();
    } catch (err) {
        console.error('Error during admin authentication', err);
        return res.status(401).send({ error: 'Unauthorized' });
    }
};