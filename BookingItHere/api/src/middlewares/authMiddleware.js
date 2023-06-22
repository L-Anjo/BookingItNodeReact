const jwt = require('jsonwebtoken');
const md5 = require('md5');
const redisClient = require('../config/redis')
const User = require("../models/User");

/**
 * Auth Middleware
 *
 * @author João Ponte
 * @param req
 * @param res
 * @param next
 * @returns {Promise<*>}
 */
module.exports = async (req, res, next) => {
    try {
        const token = (req.headers.authorization || req.body.token || req.query.token || req.headers["x-access-token"])?.replace('Bearer ','');

        if (!token) {
            return res.status(401).send({ error: 'Unauthorized' });
        }
        const redisValue = await redisClient.get(token);

        if (!redisValue) {
            return res.status(401).send({ error: 'Unauthorized' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findOne({ where: { token: token } });

        const checkClient = md5(req.get('User-Agent') ?? process.env.NODE_ENV);
        if (!user || !decoded.id || decoded.check !== checkClient) {
            await redisClient.del(token);
            return res.status(401).send({ error: 'Unauthorized' });
        }

        req.userId = decoded.id;
        req.userPerms = decoded.perms;
        req.isAdmin = (user.user_type_id === 3);

        next();
    } catch (err) {
        console.error('Error during authentication', err);
        return res.status(401).send({ error: 'Unauthorized' });
    }
};
