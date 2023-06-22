const express = require('express');
const router = express.Router();
const userTypeController = require("../controllers/userTypeController");
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

const {
    param,
    check,
    validationResult
} = require('express-validator');

/**
 * @author João Ponte
 * @swagger
 * /usertypes:
 *  get:
 *       summary: Devolve todos os tipos de utilizador existente
 *       tags:
 *         - UserTypes
 *       responses:
 *         '200':
 *           description: Tipos de utilizadores
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
 *         '400':
 *           description: Tipo de utilizador não existe
 *         '500':
 *           description: Server Error
 */
router.get('/', [
    authMiddleware,
    adminMiddleware
],(req, res) => {
    return userTypeController.getAllUserType(req, res);
});

/**
 * @author João Ponte
 * @swagger
 * /usertypes/{user_type_id}:
 *  get:
 *       summary: Devolve um tipo de utilizador existente
 *       tags:
 *         - UserTypes
 *       parameters:
 *         - name: user_type_id
 *           in: path
 *           description: ID do tipo de utilizador
 *           required: true
 *           type: integer
 *       responses:
 *         '200':
 *           description: Tipo de utilizador
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
 *         '400':
 *           description: Tipo de utilizador não existe
 *         '500':
 *           description: Server Error
 */
router.get('/:id', [
    param("id").isInt()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return userTypeController.getUserType(req, res);
});

/**
 * @author João Ponte
 * @swagger
 * /usertypes:
 *  post:
 *      summary: Cria um novo tipo utilizador
 *      tags:
 *          - UserTypes
 *      security:
 *          - bearerAuth: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/UserType'
 *                  example:
 *                      name: Utilizador
 *      responses:
 *        '201':
 *          description: Tipo de utilizador criado com sucesso
 *          schema:
 *            $ref: '#/definitions/UserType'
 *        '401':
 *          description:  Field Missing
 *        '406':
 *          description:  Not Acceptable
 */
router.post('/', [
    authMiddleware,
    adminMiddleware
], [
    check('name').isString()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return userTypeController.create(req, res);
});

/**
 * @author João Ponte
 * @swagger
 * /usertypes/{userType_id}:
 *  put:
 *     summary: Atualiza um tipo de utilizador existente
 *     tags:
 *       - UserTypes
 *     parameters:
 *       - name: userType_id
 *         in: path
 *         description: ID do tipo de utilizador a ser actualizado
 *         required: true
 *         type: integer
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/UserType'
 *                  example:
 *                      name: Utilizador
 *     responses:
 *        '200':
 *          description: Tipo de utilizador actualizado com sucesso
 *          schema:
 *            $ref: '#/definitions/UserType'
 *        '400':
 *          description: Tipo de utilizador não existe
 *        '500':
 *          description: Server Error
 */
router.put('/:id', [
    authMiddleware,
    adminMiddleware
], [
    param("id").isInt(),
    check('name').isString()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return userTypeController.update(req, res);
});

/**
 * @author João Ponte
 * @swagger
 * /usertypes/{userType_id}:
 *  delete:
 *       summary: Remove um tipo de utilizador existente
 *       tags:
 *         - UserTypes
 *       parameters:
 *         - name: userType_id
 *           in: path
 *           description: ID do tipo de utilizador a ser removido
 *           required: true
 *           type: integer
 *       responses:
 *         '200':
 *           description: Tipo de utilizador removido com sucesso
 *         '400':
 *           description: Tipo de utilizador não existe
 *         '500':
 *           description: Server Error
 */
router.delete('/:id', [
    authMiddleware,
    adminMiddleware
], [
    param("id").isInt()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return userTypeController.hardDelete(req, res);
});

module.exports = router;