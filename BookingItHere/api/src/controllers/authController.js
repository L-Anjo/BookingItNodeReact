const jwt = require('jsonwebtoken');
const md5 = require('md5');
const User = require('../models/User');
const Notification = require('../models/Notification');
const redisClient = require('../config/redis');
const {faker} = require("@faker-js/faker");
const bcrypt = require("bcrypt");

/**
 * Login
 *
 * @author João Ponte
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.login = async (req, res) => {
    try {
        if (!req.body.email) {
            return res.status(401).send({message: 'Field missing!'});
        }

        let user = await User.findOne({where: {email: req.body.email}});

        const isPasswordValid = (user) ? await user.comparePassword(req.body.password) : false;

        if (isPasswordValid === true) {
            if (user.token && redisClient.get(user.token)) {
                redisClient.del(user.token);
            }

            const payload = {
                id: user.id,
                perms: user.user_type_id,
                check: md5(req.get('User-Agent') ?? process.env.NODE_ENV)
            };

            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRES_IN
            });

            redisClient.set(token, JSON.stringify({id: user.id}));

            await user.update({token: token});

            return res.status(200).json({
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    perms: user.user_type_id,
                    isAdmin: (user.user_type_id === 3)
                },
                token: token
            });
        }
        return res.status(401).send({error: 'Invalid email or password'});
    } catch (err) {
        console.error('Error during login', err);
        return res.status(500).json({error: 'Internal server error'});
    }
};

/**
 * Logout
 *
 * @author João Ponte
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.logout = async (req, res) => {
    let token = (req.headers.authorization || req.body.token || req.query.token || req.headers["x-access-token"]);
    token = token?.replace('Bearer ', '');

    if (!token) {
        return res.status(200).send({error: 'No token!'});
    }

    try {
        const redisValue = await redisClient.get(token);
        if (!redisValue) {
            return res.status(401).send({error: 'Invalid token!'});
        }

        await redisClient.del(token);
        return res.status(200).send({message: 'Successfully logged out'});
    } catch (err) {
        return res.status(401).send({error: 'Unauthorized'});
    }
};

/**
 * Forget Password
 *
 * @author João Ponte
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.forgetPassword = async (req, res) => {
    try {
        if (!req.body.email) {
            return res.status(401).send({message: 'Field missing!'});
        }

        let user = await User.findOne({where: {email: req.body.email}});
        if (user) {
            const newPassword = faker.internet.password(6);

            await Notification.create({
                msg: `Nova password: ${newPassword}`,
                send: 0,
                user_id: user.id
            });
            await user.update({password: bcrypt.hashSync(newPassword, parseInt(process.env.BCRYPT_SALTROUNDS))});
        }

        return res.status(200).send({message: 'Email send'});
    } catch (err) {
        return res.status(401).send({error: 'Unauthorized'});
    }
};

/**
 * Refresh Token
 *
 * @author João Ponte
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.refresh = async (req, res) => {
    try {

        let token_old = (req.headers.authorization || req.body.token || req.query.token || req.headers["x-access-token"])?.replace('Bearer ','');

        if (!token_old) {
            return res.status(401).send({ error: 'Unauthorized' });
        }
        const redisValue = await redisClient.get(token_old);

        if (!redisValue) {
            return res.status(401).send({ error: 'Unauthorized' });
        }

        const decoded = jwt.verify(token_old, process.env.JWT_SECRET);

        const user = await User.findOne({ where: { token: token_old } });

        const checkClient = md5(req.get('User-Agent') ?? process.env.NODE_ENV);
        if (!user || !decoded.id || decoded.check !== checkClient) {
            await redisClient.del(token_old);
            return res.status(401).send({ error: 'Unauthorized' });
        }

        const payload = {
            id: user.id,
            perms: user.user_type_id,
            check: md5(req.get('User-Agent') ?? process.env.NODE_ENV)
        };

        let token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });

        await redisClient.set(token, JSON.stringify({id: user.id}));

        await user.update({token: token});
        await redisClient.del(token_old);
        return res.status(200).json({
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                perms: user.user_type_id,
                isAdmin: (user.user_type_id === 3)
            },
            token: token
        });
    } catch (err) {
        console.error('Error during login', err);
        return res.status(500).json({error: 'Internal server error'});
    }
};