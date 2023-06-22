const express = require('express');
const router = express.Router();
const reservationController = require("../controllers/reservationController");
const authMiddleware = require("../middlewares/authMiddleware");
const advertiserMiddleware = require("../middlewares/advertiserMiddleware");
const {
    param,
    check,
    validationResult
} = require('express-validator');
const adminMiddleware = require('../middlewares/adminMiddleware');

/**
 * @swagger
 * /reservation:
 *  post:
 *      summary: Cria uma nova reserva
 *      tags:
 *          - Reservations
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/Reservation'
 *                  example:
 *                      init_date: 2023-04-25
 *                      end_date: 2023-04-27
 *                      guestsNumber: 4
 *                      house_id: 1
 *                      services:
 *                        - name: Limpeza
 *                        - name: Wi-Fi
 *      responses:
 *        '201':
 *          description: Reserva criada com sucesso
 *          schema:
 *            $ref: '#/definitions/Reservation'
 *        '401':
 *          description:  Field Missing
 *        '406':
 *          description:  Not Acceptable
 */
router.post('/', [
    authMiddleware,
    check('init_date').isDate(),
    check('end_date').isDate(),
    check('guestsNumber').isInt(),
    check('house_id').isInt()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return reservationController.create(req, res);
});

/**
 * @swagger
 * /reservation/{reservation_id}:
 *  put:
 *     summary: Atualiza uma Reserva existente
 *     tags:
 *       - Reservations
 *     parameters:
 *       - name: reservation_id
 *         in: path
 *         description: ID da Reserva a ser actualizada
 *         required: true
 *         type: string
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/Reservation'
 *                  example:
 *                      # Properties of a referenced object
 *                      init_date: 2023-04-25
 *                      end_date: 2023-04-27
 *                      guestsNumber: 4
 *                      user_id: 1
 *                      house_id: 1
 *                      state_id: 1
 *                      services:
 *                        - name: Limpeza
 *                        - name: Wi-Fi
 *     responses:
 *        '200':
 *          description: Reserva actualizada com sucesso
 *          schema:
 *            $ref: '#/definitions/Reservation'
 *        '400':
 *          description: Reserva não existe
 *        '500':
 *          description: Server Error
 */
router.put('/:id', [
    authMiddleware,
    advertiserMiddleware,
    adminMiddleware,
   // check('init_date').isDate(),
    //check('end_date').isDate(),
   // check('guestsNumber').isInt(),
  //  check('user_id').isInt(),
   // check('house_id').isInt(),
    check('state_id').isInt()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return reservationController.update(req, res);
});

/**
 * @swagger
 * /reservation/{reservation_id}/status/{state_id}:
 *  put:
 *     summary: Atualiza Status da reserva
 *     tags:
 *       - Reservations
 *     parameters:
 *       - name: reservation_id
 *         in: path
 *         description: ID do reserva a ser atualizado
 *         required: true
 *         type: string
 *       - name: state_id
 *         in: path
 *         description: ID do estado a ser atualizado
 *         required: false
 *         type: string
 *     responses:
 *        '200':
 *          description: Reserva atualizada com sucesso
 *          schema:
 *            $ref: '#/definitions/Reservation'
 *        '400':
 *          description: Reserva não existe
 *        '500':
 *          description: Server Error
 */
router.put('/:reservation_id/status/:state_id',[
    authMiddleware,
    advertiserMiddleware,
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return reservationController.updateReservationState(req, res);
});

/**
 * @swagger
 * /reservation/{reservation_id}:
 *  delete:
 *       summary: Remove uma reserva existente
 *       tags:
 *         - Reservations
 *       parameters:
 *         - name: reservation_id
 *           in: path
 *           description: ID da Reserva a ser removido
 *           required: true
 *           type: integer
 *       responses:
 *         '200':
 *           description: Reserva removido com sucesso
 *         '404':
 *           description: Not Found
 *         '500':
 *           description: Server Error
 */
router.delete('/:id', [
    authMiddleware,
    adminMiddleware,
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return reservationController.delete(req, res);
});

/**
 * @swagger
 * /reservation/{reservation_id}:
 *  post:
 *       summary: Cancela uma reserva existente
 *       tags:
 *         - Reservations
 *       parameters:
 *         - name: reservation_id
 *           in: path
 *           description: ID da Reserva a ser cancelada
 *           required: true
 *           type: integer
 *       responses:
 *         '200':
 *           description: Reserva cancelada com sucesso
 *         '404':
 *           description: Not Found
 *         '500':
 *           description: Server Error
 */
router.post('/:id', [
    authMiddleware,
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return reservationController.softDelete(req, res);
});

/**
 * @swagger
 * /reservation/{reservation_id}:
 *  get:
 *       summary: Devolve uma reserva existente
 *       tags:
 *         - Reservations
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - name: reservation_id
 *           in: path
 *           description: ID da reserva
 *           required: true
 *           type: string
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
 *                       guestsNumber:
 *                         type: integer
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
router.get('/:id', [
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return reservationController.getReservation(req, res);
});

/**
 * @swagger
 * /reservation:
 *  get:
 *       summary: Devolve todas as reservas
 *       tags:
 *         - Reservations
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
router.get('/', [
    authMiddleware,
    adminMiddleware,
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return reservationController.getAllReservations(req, res);
});


/**
 * @swagger
 * /reservation/search:
 *  post:
 *      summary: Procura uma reserva
 *      tags:
 *          - Reservations
 *      security:
 *          - bearerAuth: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/Reservation'
 *                  example:
 *                      house_id: 1
 *                      user_id: 1
 *                      state_id: 1
 *      responses:
 *        '201':
 *          description: Retorna as reservas referentes à pesquisa
 *          schema:
 *            $ref: '#/definitions/Reservation'
 *        '401':
 *          description:  Field Missing
 *        '406':
 *          description:  Not Acceptable
 */
router.post('/search', [
    check('house_id').isInt().optional(),
    check('user_id').isInt().optional(),
    check('state_id').isInt().optional()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return reservationController.search(req, res);
});

module.exports = router;