const express = require('express');
const authController = require('../controllers/authController');
const {check, validationResult} = require("express-validator");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

/**
 * @author João Ponte
 * @swagger
 * /auth/login:
 *  post:
 *      summary: Login
 *      tags:
 *          - Auth
 *      security:
 *          - bearerAuth: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/User'
 *                  example:
 *                      email: jessicasmith@bookingithere.com
 *                      password: "JessicaSmith"
 *      responses:
 *        '201':
 *          description: Login com sucesso
 *        '401':
 *          description:  Field Missing
 *        '406':
 *          description:  Not Acceptable
 */
router.post('/login', [
    check('email').isEmail(),
    check('password').isLength({min: 6, max: 12}),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return authController.login(req, res);
});

/**
 * @author João Ponte
 * @swagger
 * /auth/logout:
 *  get:
 *      summary: Logout
 *      tags:
 *          - Auth
 *      security:
 *          - bearerAuth: []
 *      responses:
 *        '201':
 *          description: Logout com sucesso
 *        '401':
 *          description:  Field Missing
 *        '406':
 *          description:  Not Acceptable
 */
router.get('/logout', authController.logout);

/**
 * @author João Ponte
 */
/**
 * @swagger
 * /auth/forget:
 *  post:
 *     summary: Envia uma nova passaword para o utilizador
 *     tags:
 *       - Auth
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/User'
 *                  example:
 *                      email: jessicasmith@bookingithere.com
 *     responses:
 *        '200':
 *          description: Email enviado com sucesso
 *        '400':
 *          description: Utilizador não existe
 *        '500':
 *          description: Server Error
 */
router.post('/forget', [
    check('email').isEmail(),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return authController.forgetPassword(req, res);
});

/**
 * @author João Ponte
 */
/**
 * @swagger
 * /auth/refresh:
 *  get:
 *     summary: Faz refresh ao token do user
 *     tags:
 *       - Auth
 *     responses:
 *        '200':
 *          description: Send new token
 *        '401':
 *          description: Unauthorized
 *        '404':
 *          description: Not found
 *        '500':
 *          description: Server Error
 */
router.get('/refresh', authMiddleware, (req, res) => {
    return authController.refresh(req, res);
});

module.exports = router;
