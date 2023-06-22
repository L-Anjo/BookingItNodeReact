const express = require('express');
const router = express.Router();
const paymentStateController = require("../controllers/paymentStateController");
const authMiddleware = require("../middlewares/authMiddleware");
const {
    check,
    validationResult
} = require('express-validator');
/**
 * @swagger
 * /paymentStates:
 *  post:
 *      summary: Cria um novo estado do pagamento
 *      tags:
 *          - PaymentStates
 *      security:
 *          - bearerAuth: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/PaymentState'
 *                  example:
 *                      state: Completo
 *      responses:
 *        '201':
 *          description: Estado do pagamento criado com sucesso
 *          schema:
 *            $ref: '#/definitions/PaymentState'
 *        '401':
 *          description:  Field Missing
 *        '406':
 *          description:  Not Acceptable
 */
router.post('/', [
    check('state').isString()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return paymentStateController.create(req, res);
});

/**
 * @swagger
 * /paymentStates/{paymentStates_id}:
 *  put:
 *     summary: Atualiza um estado do pagamento existente
 *     tags:
 *       - PaymentStates
 *     parameters:
 *       - name: paymentStates_id
 *         in: path
 *         description: ID do estado do pagamento a ser actualizado
 *         required: true
 *         type: string
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/PaymentState'
 *                  example:
 *                      # Properties of a referenced object
 *                      state: Completo
 *     responses:
 *        '200':
 *          description: Estado atualizado com sucesso
 *          schema:
 *            $ref: '#/definitions/PaymentState'
 *        '400':
 *          description: Estado não existe
 *        '500':
 *          description: Server Error
 */
router.put('/:id',[
    check('state').isString()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return paymentStateController.update(req, res);
});


/**
 * @swagger
 * /paymentStates/{paymentStates_id}:
 *  delete:
 *       summary: Remove um estado existente
 *       tags:
 *         - PaymentStates
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - name: paymentStates_id
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
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return paymentStateController.delete(req, res);
});

/**
 * @swagger
 * /paymentStates/{paymentStates_id}:
 *  get:
 *       summary: Devolve um estado existente
 *       tags:
 *         - PaymentStates
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - name: paymentStates_id
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
 *           description: Pagamento não existe
 *         '500':
 *           description: Server Error
 */
router.get('/:id', [
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return paymentStateController.getPaymentState(req, res);
});


module.exports = router;