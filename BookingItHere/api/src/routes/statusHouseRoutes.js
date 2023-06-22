const express = require('express');
const router = express.Router();
const statusHouseController = require("../controllers/statusHouseController");
const {
    param,
    check,
    validationResult
} = require('express-validator');
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

/**
 * @author João Carvalho
 * @swagger
 * /statushouses:
 *  get:
 *       summary: Devolve Todos os Estados dos Alojamentos
 *       tags:
 *         - StatusHouses
 *       responses:
 *         '200':
 *           description: Alojamentos
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   data:
 *                     type: object
 *                     properties:
 *                       status:
 *                          type : number 
 *         '400':
 *           description: Estado não existe
 *         '500':
 *           description: Server Error
 */
router.get('/', [
    authMiddleware,
    adminMiddleware
],(req, res) => {
    return statusHouseController.getAll(req, res);
});

/**
 * @author Luís Anjo
 * @swagger
 * /statushouses:
 *  post:
 *      summary: Cria um novo Estado do Alojamento
 *      tags:
 *          - StatusHouses
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/StatusHouse'
 *                  example:
 *                      status: Disponivel
 *      responses:
 *        '201':
 *          description: Estado do Alojamento criado com sucesso
 *          schema:
 *            $ref: '#/definitions/StatusHouse'
 *        '401':
 *          description:  Field Missing
 *        '406':
 *          description:  Not Acceptable
 */
router.post('/', [
    check('status').isString()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return statusHouseController.create(req, res);
});

/**
 * @author Luís Anjo
 * @swagger
 * /statushouses/{statusHouse_id}:
 *  delete:
 *       summary: Remove um estado de Alojamento existente
 *       tags:
 *         - StatusHouses
 *       parameters:
 *         - name: statusHouse_id
 *           in: path
 *           description: ID do Estado do alojamento a ser removido
 *           required: true
 *           type: string
 *       responses:
 *         '200':
 *           description: Estado do Alojamento removido com sucesso
 *         '400':
 *           description: Estado do Alojamento não existe
 *         '500':
 *           description: Server Error
 */
router.delete('/:id', [
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return statusHouseController.hardDelete(req, res);
});

module.exports = router;

