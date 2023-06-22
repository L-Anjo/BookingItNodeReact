const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const advertiserMiddleware = require("../middlewares/advertiserMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");
const {
    param,
    check,
    validationResult
} = require('express-validator');

/**
 * @author João Ponte
 * @swagger
 * /users:
 *  get:
 *       summary: Devolve todos os utilizadores existente
 *       tags:
 *         - Users
 *       responses:
 *         '200':
 *           description: Devolve todos os utilizadores
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   data:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: number
 *                       name:
 *                         type: string
 *                       email:
 *                         type: string
 *                       phone:
 *                         type: string
 *                       usertype:
 *                         type: object
 *                         properties:
 *                            id:
 *                              type: number
 *                            name:
 *                              type: string
 *         '400':
 *           description: Não existe nenhum utilizador
 *         '500':
 *           description: Server Error
 */
router.get('/', [
    authMiddleware,
    adminMiddleware
], (req, res) => {
    return userController.getAllUsers(req, res);
});

/**
 * @author João Ponte
 * @swagger
 * /users/{user_id}:
 *  get:
 *       summary: Devolve um utilizador existente
 *       tags:
 *         - Users
 *       parameters:
 *         - name: user_id
 *           in: path
 *           description: ID do utilizador
 *           required: true
 *           type: integer
 *       responses:
 *         '200':
 *           description: Utilizador
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   data:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       email:
 *                         type: string
 *                       phone:
 *                         type: string
 *                       usertype:
 *                         type: object
 *                         properties:
 *                            id:
 *                              type: integer
 *                            name:
 *                              type: string
 *         '400':
 *           description: Utilizador não existe
 *         '500':
 *           description: Server Error
 */
router.get('/:id', authMiddleware, [
    param("id").isInt()
], (req, res) => {
    if (parseInt(req.params.id) !== parseInt(req.userId) && !req.isAdmin) {
        return res.status(401).send({error: 'Unauthorized'});
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return userController.getUser(req, res);
});

/**
 * @author João Ponte
 * @swagger
 * /users:
 *  post:
 *      summary: Cria um novo utilizador
 *      tags:
 *          - Users
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/User'
 *                  example:
 *                      email: jessicasmith@bookingithere.com
 *                      password: JessicaSmith
 *                      confirmPassword: JessicaSmith
 *                      name: Jessica Smith
 *                      phone: "910000001"
 *      responses:
 *        '201':
 *          description: Utilizador criado com sucesso
 *          schema:
 *            $ref: '#/definitions/User'
 *        '401':
 *          description:  Field Missing
 *        '406':
 *          description:  Not Acceptable
 */
router.post('/', [
    check('email').isEmail(),
    check('name').isString(),
    check('phone').optional().isString(),
    check('password').isLength({min: 6, max: 12}),
    check('confirmPassword').isLength({min: 6, max: 12}),
    check('user_type_id').optional()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return userController.create(req, res);
});

/**
 * @author João Ponte
 */
/**
 * @swagger
 * /users/{user_id}:
 *  put:
 *     summary: Atualiza um utilizador existente
 *     tags:
 *       - Users
 *     parameters:
 *       - name: user_id
 *         in: path
 *         description: ID do utilizador a ser actualizado
 *         required: true
 *         type: integer
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/User'
 *                  example:
 *                      # Properties of a referenced object
 *                      email: jessicasmith@bookingithere.com
 *                      password: JessicaSmith
 *                      newPassword: JessicaSmith2
 *                      confirmPassword: JessicaSmith2
 *                      name: Jessica Smith
 *                      phone: "910000001"
 *                      user_type_id: 1
 *     responses:
 *        '200':
 *          description: Utilizador actualizado com sucesso
 *          schema:
 *            $ref: '#/definitions/User'
 *        '400':
 *          description: Utilizador não existe
 *        '500':
 *          description: Server Error
 */
router.put('/:id', authMiddleware, [
    param("id").isInt(),
    check('email').optional().isEmail(),
    check('password').optional().isLength({min: 6, max: 12}),
    check('newPassword').optional().isLength({min: 6, max: 12}),
    check('confirmPassword').optional().isLength({min: 6, max: 12}),
    check('name').optional().isString(),
    check('phone').optional().isString(),
    check('user_type_id').optional().isInt(),
    check('status').optional().isInt()
], (req, res) => {
    if (parseInt(req.params.id) !== parseInt(req.userId) && !req.isAdmin) {
        return res.status(401).send({error: 'Unauthorized'});
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return userController.update(req, res);
});

/**
 * @author João Ponte
 * @swagger
 * /users/{user_id}:
 *  delete:
 *       summary: Remove um utilizador existente
 *       tags:
 *         - Users
 *       parameters:
 *         - name: user_id
 *           in: path
 *           description: ID do utilizador a ser removido
 *           required: true
 *           type: integer
 *       responses:
 *         '200':
 *           description: Utilizador removido com sucesso
 *         '400':
 *           description: Utilizador não existe
 *         '500':
 *           description: Server Error
 */
router.delete('/:id', authMiddleware, [
    param("id").isInt()
], (req, res) => {
    if (parseInt(req.params.id) !== parseInt(req.userId) && !req.isAdmin) {
        return res.status(401).send({error: 'Unauthorized'});
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return userController.softDelete(req, res);
});

/**
 * @author Pedro Martins
 * @swagger
 * /users/{user_id}/houses:
 *  get:
 *       summary: Devolve os alojamentos de um anunciante
 *       tags:
 *         - Users
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         '200':
 *           description: Alojamento
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   data:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       doorNumber:
 *                         type: string
 *                       floorNumber:
 *                         type: string
 *                       price:
 *                         type: string
 *                       guestsNumber:
 *                         type: string
 *                       road:
 *                         type: string
 *                       propertyAssessment:
 *                         type: string
 *                       status:
 *                         type: object
 *                         properties:
 *                            id:
 *                              type: integer
 *                            status:
 *                              type: string
 *                       postalCode:
 *                         type: object
 *                         properties:
 *                            id:
 *                              type: integer
 *                            postalCode:
 *                              type: string
 *                            concelho:
 *                              type: string
 *                            district:
 *                              type: string
 *                       services:
 *                         type: object
 *                         properties:
 *                            id:
 *                              type: integer
 *                            name:
 *                              type: string
 *                            price:
 *                              type: string
 *         '400':
 *           description: Utilizador não tem casas
 *         '500':
 *           description: Server Error
 */
router.get('/:id/houses', [
    authMiddleware,
    advertiserMiddleware,
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return userController.getUsersHouse(req, res);
});

/**
 * @author Diogo
 * @swagger
 * /users/{user_id}/announcements:
 *  get:
 *       summary: Devolve os anuncios de um anunciante
 *       tags:
 *         - Users
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         '200':
 *           description: Anuncio
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   data:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       house_id:
 *                         type: integer
 *                       priceClick:
 *                         type: float
 *                       numbClicks:
 *                         type: integer
 *         '400':
 *           description: Utilizador não tem anuncios
 *         '500':
 *           description: Server Error
 */
router.get('/:id/announcements', [
    authMiddleware,
    advertiserMiddleware,
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return userController.getUsersAnnouncement(req, res);
});

/**
 * @swagger
 * /users/{user_id}/reservation:
 *  get:
 *       summary: Devolve todas as reservas do utilizador
 *       tags:
 *         - Users
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         '200':
 *           description: Reserva
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   data:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       init_date:
 *                         type: date
 *                       end_date:
 *                         type: date
 *                       user_id:
 *                         type: string
 *                       house_id:
 *                         type: string
 *                       state_id:
 *                         type: string
 * 
 *         '400':
 *           description: Reserva não existe
 *         '500':
 *           description: Server Error
 */
router.get('/:id/reservation', [
    authMiddleware,
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return userController.getUsersReservation(req, res);
});

/**
 * @swagger
 * /users/{user_id}/houses/reservation:
 *  get:
 *       summary: Devolve todas as reservas do anunciante
 *       tags:
 *         - Users
 *       responses:
 *         '200':
 *           description: Reservations
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   data:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       init_date:
 *                         type: date
 *                       end_date:
 *                         type: date
 *                       guestsNumber:
 *                         type: integer
 *                       user_id:
 *                         type: string
 *                       house_id:
 *                         type: string
 *                       state_id:
 *                         type: string
 *         '400':
 *           description: Reserva não existe
 *         '500':
 *           description: Server Error
 */
router.get('/:id/houses/reservation', [
    authMiddleware,
    advertiserMiddleware,
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return userController.getAdvReservations(req, res);
});

module.exports = router;