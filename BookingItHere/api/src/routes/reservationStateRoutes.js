const express = require('express');
const router = express.Router();
const reservationStateController = require("../controllers/reservationStateController");
const authMiddleware = require("../middlewares/authMiddleware");
const advertiserMiddleware = require("../middlewares/advertiserMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");
const {
    check,
    validationResult
} = require('express-validator');

/**
 * @swagger
 * /reservationstates:
 *  get:
 *       summary: Devolve todos os estados da reserva
 *       tags:
 *         - ReservationStates
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         '200':
 *           description: Estado
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
 *                       state:
 *                         type: string
 *         '400':
 *           description: Alojamento não existe
 *         '500':
 *           description: Server Error
 */
router.get('/', [    
    authMiddleware,
    adminMiddleware,
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return reservationStateController.getAllReservationStates(req, res);
});

/**
 * @swagger
 * /reservationstates:
 *  post:
 *      summary: Cria um novo estado da reserva
 *      tags:
 *          - ReservationStates
 *      security:
 *          - bearerAuth: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/ReservationState'
 *                  example:
 *                      state: Completo
 *      responses:
 *        '201':
 *          description: Estado do alojamento criado com sucesso
 *          schema:
 *            $ref: '#/definitions/ReservationState'
 *        '401':
 *          description:  Field Missing
 *        '406':
 *          description:  Not Acceptable
 */
router.post('/', [
    authMiddleware,
    advertiserMiddleware,
    check('state').isString()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return reservationStateController.create(req, res);
});

/**
 * @swagger
 * /reservationstates/{reservationStates_id}:
 *  put:
 *     summary: Atualiza um estado da reserva existente
 *     tags:
 *       - ReservationStates
 *     parameters:
 *       - name: reservationStates_id
 *         in: path
 *         description: ID do estado da reserva a ser actualizado
 *         required: true
 *         type: string
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/ReservationState'
 *                  example:
 *                      # Properties of a referenced object
 *                      state: Completo
 *     responses:
 *        '200':
 *          description: Estado atualizado com sucesso
 *          schema:
 *            $ref: '#/definitions/ReservationState'
 *        '400':
 *          description: Estado não existe
 *        '500':
 *          description: Server Error
 */
router.put('/:id',[
    authMiddleware,
    advertiserMiddleware,
    check('state').isString()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return reservationStateController.update(req, res);
});


/**
 * @swagger
 * /reservationstates/{reservationStates_id}:
 *  delete:
 *       summary: Remove um estado existente
 *       tags:
 *         - ReservationStates
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - name: reservationStates_id
 *           in: path
 *           description: ID do estado a ser removido
 *           required: true
 *           type: integer
 *       responses:
 *         '200':
 *           description: Estado removido com sucesso
 *         '404':
 *           description: Not Found
 *         '500':
 *           description: Server Error
 */
router.delete('/:id', [
    authMiddleware,
    advertiserMiddleware,
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return reservationStateController.delete(req, res);
});

/**
 * @swagger
 * /reservationstates/{reservationStates_id}:
 *  get:
 *       summary: Devolve um estado existente
 *       tags:
 *         - ReservationStates
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - name: reservationStates_id
 *           in: path
 *           description: ID do estado
 *           required: true
 *           type: string
 *       responses:
 *         '200':
 *           description: Estado
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
 *                       state:
 *                         type: string
 *         '400':
 *           description: Alojamento não existe
 *         '500':
 *           description: Server Error
 */
router.get('/:id', [
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return reservationStateController.getReservationState(req, res);
});


module.exports = router;