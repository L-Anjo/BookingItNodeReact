const express = require('express');
const router = express.Router();
const serviceController = require("../controllers/serviceController");
const {
    param,
    check,
    validationResult
} = require('express-validator');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
/**
 * @swagger
 * /services:
 *  post:
 *      summary: Cria um novo serviço
 *      tags:
 *          - Services
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/Service'
 *                  example:
 *                      name: Limpeza
 *      responses:
 *        '201':
 *          description: Serviço criado com sucesso
 *          schema:
 *            $ref: '#/definitions/Service'
 *        '401':
 *          description:  Field Missing
 *        '406':
 *          description:  Not Acceptable
 */
router.post('/', [
    check('name').isString(),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return serviceController.create(req, res);
});

/**
 * @swagger
 * /services/{service_id}:
 *  put:
 *     summary: Atualiza um serviço existente
 *     tags:
 *       - Services
 *     parameters:
 *       - name: service_id
 *         in: path
 *         description: ID do Serviço a ser actualizado
 *         required: true
 *         type: string
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/Service'
 *                  example:
 *                      # Properties of a referenced object
 *                      name: Limpeza
 *     responses:
 *        '200':
 *          description: Serviço actualizado com sucesso
 *          schema:
 *            $ref: '#/definitions/Service'
 *        '400':
 *          description: Serviço não existe
 *        '500':
 *          description: Server Error
 */
router.put('/:id', [
    check('name').isString(),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return serviceController.update(req, res);
});


//router.delete('/:id', alojamentoController.suspalojamento);

/**
 * @swagger
 * /services/{service_id}:
 *  delete:
 *       summary: Remove um serviço existente
 *       tags:
 *         - Services
 *       parameters:
 *         - name: service_id
 *           in: path
 *           description: ID do serviço a ser removido
 *           required: true
 *           type: integer
 *       responses:
 *         '200':
 *           description: Serviço removido com sucesso
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
    return serviceController.delete(req, res);
});

/**
 * @swagger
 * /services/{service_id}:
 *  get:
 *       summary: Devolve um serviço existente
 *       tags:
 *         - Services
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - name: service_id
 *           in: path
 *           description: ID do serviço
 *           required: true
 *           type: string
 *       responses:
 *         '200':
 *           description: Servico
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
 *         '400':
 *           description: Servico não existe
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
    return serviceController.getService(req, res);
});

/**
 * @swagger
 * /services:
 *  get:
 *       summary: Devolve Todos os serviços
 *       tags:
 *         - Services
 *       responses:
 *         '200':
 *           description: Servicos
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
 *         '400':
 *           description: Servico não existe
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
    return serviceController.getAllServices(req, res);
});

/**
 * @swagger
 * /services/{service_id}/state/{state_id}:
 *  put:
 *     summary: Aprova um serviço existente
 *     tags:
 *       - Services
 *     parameters:
 *       - name: service_id
 *         in: path
 *         description: ID do Serviço a ser aprovado
 *         required: true
 *         type: string
 *       - name: state_id
 *         in: path
 *         description: Numero aprovação
 *         required: true
 *         type: integer
 *     responses:
 *        '200':
 *          description: Serviço actualizado com sucesso
 *          schema:
 *            $ref: '#/definitions/Service'
 *        '400':
 *          description: Serviço não existe
 *        '500':
 *          description: Server Error
 */
router.put('/:id/state/:state_id', [
    authMiddleware,
    adminMiddleware,
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return serviceController.updateStateService(req, res);
});

module.exports = router;