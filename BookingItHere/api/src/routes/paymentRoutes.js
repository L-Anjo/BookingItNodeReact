const express = require('express');
const router = express.Router();
const paymentController = require("../controllers/paymentController");
const authMiddleware = require("../middlewares/authMiddleware");
const {
    param,
    check,
    validationResult
} = require('express-validator');
/**
 * @swagger
 * /payments:
 *  post:
 *      summary: Cria um novo pagamento
 *      tags:
 *          - Payments
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/Payment'
 *                  example:
 *                      reservation_id: 1
 *                      state_id: 1
 *                      creationDate: 2023-05-25
 *                      paymentDate: 2023-05-25
 *                      paymentMethod: MBway
 *                      paymentValue: 210.50
 *      responses:
 *        '201':
 *          description: Pagamento criado com sucesso
 *          schema:
 *            $ref: '#/definitions/Payment'
 *        '401':
 *          description:  Field Missing
 *        '406':
 *          description:  Not Acceptable
 */
router.post('/', [
    check('reservation_id').isInt(),
    check('state_id').isInt(),
    check('creationDate').isDate(),
    check('paymentDate').isDate(),
    check('paymentMethod').isString(),
    check('paymentValue').isFloat()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return paymentController.create(req, res);
});

/**
 * @swagger
 * /payments/{payment_id}:
 *  put:
 *     summary: Atualiza um Pagamento existente
 *     tags:
 *       - Payments
 *     parameters:
 *       - name: payment_id
 *         in: path
 *         description: ID do Pagamento a ser actualizado
 *         required: true
 *         type: integer
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/Payment'
 *                  example:
 *                      # Properties of a referenced object
 *                      reservation_id: 1
 *                      state_id: 1
 *                      creationDate: 2023-05-25
 *                      paymentDate: 2023-05-25
 *                      paymentMethod: MBway
 *                      paymentValue: 210.50
 *     responses:
 *        '200':
 *          description: Pagamento actualizado com sucesso
 *          schema:
 *            $ref: '#/definitions/Payment'
 *        '400':
 *          description: Pagamento não existe
 *        '500':
 *          description: Server Error
 */
router.put('/:id', [
    check('reservation_id').isInt(),
    check('state_id').optional().isInt(),
    check('creationDate').optional().isDate(),
    check('paymentDate').optional(),
    check('paymentMethod').optional().isString(),
    check('paymentValue').optional().isFloat()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return paymentController.update(req, res);
});


/**
 * @swagger
 * /payments/{payment_id}:
 *  delete:
 *       summary: Remove um pagamento existente
 *       tags:
 *         - Payments
 *       parameters:
 *         - name: payment_id
 *           in: path
 *           description: ID do pagamento a ser removido
 *           required: true
 *           type: integer
 *       responses:
 *         '200':
 *           description: Pagamento removido com sucesso
 *         '404':
 *           description: Not Found
 *         '500':
 *           description: Server Error
 */
router.delete('/:id', [
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return paymentController.hardDelete(req, res);
});

/**
 * @swagger
 * /payments/{payment_id}:
 *  get:
 *       summary: Devolve um pagamento existente
 *       tags:
 *         - Payments
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - name: payment_id
 *           in: path
 *           description: ID do pagamento
 *           required: true
 *           type: string
 *       responses:
 *         '200':
 *           description: Pagamento
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
 *                       reservation_id:
 *                         type: integer
 *                       status:
 *                         type: integer
 *                       creationDate:
 *                         type: date
 *                       paymentDate:
 *                         type: date
 *                       paymentMethod:
 *                         type: string
 *                       paymentValue:
 *                         type: float
 *                       reservation:
 *                         type: object
 *                         properties:
 *                            id:
 *                              type: integer
 *                            init_date:
 *                              type: date
 *                            end_date:
 *                              type: date
 *                            user_id:
 *                              type: integer
 *                            house_id:
 *                              type: integer
 *                            state_id:
 *                              type: integer
 *         '400':
 *           description: Pagamento não existe
 *         '500':
 *           description: Server Error
 */
router.get('/:id', [
    check('id').isInt()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return paymentController.getPayment(req, res);
});

/**
 * @swagger
 * /payments/search:
 *  post:
 *      summary: Procura um pagamento
 *      tags:
 *          - Payments
 *      security:
 *          - bearerAuth: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/Payment'
 *                  example:
 *                      reservation_id: 1
 *                      state_id: 1
 *                      creationDate: 2023-05-25
 *                      paymentDate: 2023-05-25
 *                      paymentMethod: MBway
 *                      paymentValue: 210.50
 *      responses:
 *        '201':
 *          description: Retorna os pagamentos referentes à pesquisa
 *          schema:
 *            $ref: '#/definitions/Payment'
 *        '401':
 *          description:  Field Missing
 *        '406':
 *          description:  Not Acceptable
 */
router.post('/search', [
    check('reservation_id').isInt().optional(),
    check('state_id').isInt().optional(),
    check('creationDate').isDate().optional(),
    check('paymentDate').isDate().optional(),
    check('paymentMethod').isString().optional(),
    check('paymentValue').isFloat().optional()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return paymentController.search(req, res);
});


/**
 * @swagger
 * /payments:
 *  get:
 *       summary: Devolve Todos os pagamentos
 *       tags:
 *         - Payments
 *       responses:
 *         '200':
 *           description: Pagamentos
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
 *                       reservation_id:
 *                         type: integer
 *                       status:
 *                         type: integer
 *                       creationDate:
 *                         type: date
 *                       paymentDate:
 *                         type: date
 *                       paymentMethod:
 *                         type: string
 *                       paymentValue:
 *                         type: float
 *                       reservation:
 *                         type: object
 *                         properties:
 *                            _id:
 *                              type: integer
 *                            init_date:
 *                              type: date
 *                            end_date:
 *                              type: date
 *                            user_id:
 *                              type: integer
 *                            house_id:
 *                              type: integer
 *                            state_id:
 *                              type: integer
 *         '400':
 *           description: Pagamento não existe
 *         '500':
 *           description: Server Error
 */
router.get('/', [
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return paymentController.getAllPayments(req, res);
});


module.exports = router;