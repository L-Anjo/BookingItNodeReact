const express = require('express');
const router = express.Router();
const notificationController = require("../controllers/notificationController");
const {
    param,
    check,
    validationResult
} = require('express-validator');

/**
 * @author Luís Anjo
 * @swagger
 * /notification:
 *  post:
 *      summary: Cria uma nova notificação
 *      tags:
 *          - Notification
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/Notification'
 *                  example:
 *                      msg: Mensagem Do Sistema
 *                      send: 0
 *                      userId: 1
 *      responses:
 *        '201':
 *          description: Codigo Postal criado com sucesso
 *          schema:
 *            $ref: '#/definitions/Notification'
 *        '401':
 *          description:  Field Missing
 *        '406':
 *          description:  Not Acceptable
 */
router.post('/', [
    check('msg').isString(),
    check('send').isInt(),
    check('userId').isInt()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return notificationController.create(req, res);
});


/**
 * @author Luís Anjo
 * @swagger
 * /Notification/{notification_id}:
 *  put:
 *     summary: Atualiza uma Notification
 *     tags:
 *       - Notification
 *     parameters:
 *       - name: notification_id
 *         in: path
 *         description: ID do Notification a ser actualizado
 *         required: true
 *         type: string
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/Notification'
 *                  example:
 *                      # Properties of a referenced object
 *                      msg: Mensagem Do Sistema
 *                      send: 0
 *                      userId: 1
 *     responses:
 *        '200':
 *          description: Notificação actualizada com sucesso
 *          schema:
 *            $ref: '#/definitions/Notification'
 *        '400':
 *          description: Notificação não existe
 *        '500':
 *          description: Server Error
 */
router.put('/:id', [
    check('msg').isString(),
    check('send').isInt(),
    check('userId').isInt()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return notificationController.update(req, res);
});

/**
 * @author Luís Anjo
 * @swagger
 * /notification/{notification_id}:
 *  delete:
 *       summary: Remove um Notification existente
 *       tags:
 *         - Notification
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - name: notification_id
 *           in: path
 *           description: ID da notificação a ser removida
 *           required: true
 *           type: integer
 *       responses:
 *         '200':
 *           description: Notificação removida com sucesso
 *         '404':
 *           description: Not Found
 *         '500':
 *           description: Server Error
 */
router.delete('/:id', [], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return notificationController.hardDelete(req, res);
});

module.exports = router;

