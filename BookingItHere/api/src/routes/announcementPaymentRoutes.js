const express = require('express');
const router = express.Router();
const announcementPaymentController = require("../controllers/announcementPaymentController");
const authMiddleware = require("../middlewares/authMiddleware");
const {
    param,
    check,
    validationResult
} = require('express-validator');
/**
 * @swagger
 * /announcementPayments:
 *  post:
 *      summary: Cria um novo pagamento de anuncio
 *      tags:
 *          - AnnouncementPayments
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/AnnouncementPayment'
 *                  example:
 *                      announcement: 1
 *                      status: 1
 *                      creationDate: 2023-04-25
 *                      paymentDate: 2023-04-27
 *                      paymentMethod: MBway
 *                      paymentValue: 210.50
 *      responses:
 *        '201':
 *          description: Pagamento do anuncio criado com sucesso
 *          schema:
 *            $ref: '#/definitions/AnnouncementPayment'
 *        '401':
 *          description:  Field Missing
 *        '406':
 *          description:  Not Acceptable
 */
router.post('/', [
    check('announcement').isInt(),
    check('status').isInt(),
    check('creationDate').isDate(),
    check('paymentDate').isDate(),
    check('paymentMethod').isString(),
    check('paymentValue').isFloat()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return announcementPaymentController.create(req, res);
});

//router.delete('/:id', alojamentoController.suspalojamento);

/**
 * @swagger
 * /announcementPayments/{announcementPayments_id}:
 *  delete:
 *       summary: Remove um pagamento existente
 *       tags:
 *         - AnnouncementPayments
 *       parameters:
 *         - name: announcementPayments_id
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
    return announcementPaymentController.hardDelete(req, res);
});

/**
 * @swagger
 * /announcementPayments/{announcementPayments_id}:
 *  get:
 *       summary: Devolve um payment existente
 *       tags:
 *         - AnnouncementPayments
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - name: announcementPayments_id
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
 *                       announcemnt:
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
    return announcementPaymentController.getAnnouncementPayment(req, res);
});

/**
 * @swagger
 * /payments/search:
 *  post:
 *      summary: Procura um pagamento
 *      tags:
 *          - AnnouncementPayments
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
 *                      status: 1
 *                      creationDate: (2023, 04, 21, 15, 05)
 *                      paymentDate: (2023, 04, 21, 15, 08)
 *                      paymentMethod: MBway
 *                      paymentValue: 210,50
 *      responses:
 *        '201':
 *          description: Retorna os anuncios referentes à pesquisa
 *          schema:
 *            $ref: '#/definitions/Payment'
 *        '401':
 *          description:  Field Missing
 *        '406':
 *          description:  Not Acceptable
 */
router.post('/search', [
    check('reservation_id').isInt().optional(),
    check('status').isInt().optional(),
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
 * /announcementPayments/{announcementPayment_id}:
 *  put:
 *     summary: Atualiza um Pagamento existente
 *     tags:
 *       - AnnouncementPayments
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
 *                      $ref: '#/definitions/AnnouncementPayment'
 *                  example:
 *                      # Properties of a referenced object
 *                      announcement: 1
 *                      status: 1
 *                      creationDate: 2023-04-25
 *                      paymentDate: 2023-04-27
 *                      paymentMethod: MBway
 *                      paymentValue: 210.50
 *     responses:
 *        '200':
 *          description: Pagamento actualizado com sucesso
 *          schema:
 *            $ref: '#/definitions/AnnouncementPayment'
 *        '400':
 *          description: Pagamento não existe
 *        '500':
 *          description: Server Error
 */
router.put('/:id', [
    check('announcement').optional().isInt(),
    check('status').optional().isInt(),
    check('creationDate').optional().isDate(),
    check('paymentDate').optional(),
    check('paymentMethod').optional().isString(),
    check('paymentValue').optional().isFloat()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return announcementPaymentController.update(req, res);
});

module.exports = router;