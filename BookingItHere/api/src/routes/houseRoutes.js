const express = require('express');
const router = express.Router();
const houseController = require("../controllers/houseController");
const authMiddleware = require("../middlewares/authMiddleware");
const advertiserMiddleware = require("../middlewares/advertiserMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");
const {
    check,
    validationResult
} = require('express-validator');


/**
 * @author João Ponte
 * @swagger
 * /houses/suspended:
 *  get:
 *       summary: Devolve Todos os Alojamentos por aprovar
 *       tags:
 *         - Houses
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
 *                       id:
 *                         type: number
 *                       name:
 *                         type: string
 *                       doorNumber:
 *                         type: number
 *                       floorNumber:
 *                         type: number
 *                       price:
 *                         type: number
 *                       guestsNumber:
 *                         type: number
 *                       road:
 *                         type: string
 *                       propertyAssessment:
 *                         type: string
 *                       StatusHouse:
 *                         type: object
 *                         properties:
 *                            id:
 *                              type: number
 *                            status:
 *                              type: string
 *                       PostalCode:
 *                         type: object
 *                         properties:
 *                            postalcode:
 *                              type: integer
 *                            concelho:
 *                              type: string
 *                            district:
 *                              type: string
 *                       Services:
 *                         type: object
 *                         properties:
 *                            id:
 *                              type: number
 *                            name:
 *                              type: string
 *                            price:
 *                              type: number
 *         '400':
 *           description: Alojamento não existe
 *         '500':
 *           description: Server Error
 */
router.get('/suspended', [
    authMiddleware,
    adminMiddleware
], (req, res) => {
    return houseController.getAllHouses(req, res, 1);
});

/**
 * @author Luís Anjo
 * @swagger
 * /houses:
 *  post:
 *      summary: Cria um novo alojamento
 *      tags:
 *          - Houses
 *      security:
 *          - bearerAuth: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/House'
 *                  example:
 *                      name: Casa T4
 *                      doorNumber: 123456
 *                      floorNumber: 1
 *                      price: 60
 *                      guestsNumber: 3
 *                      postalCode: 4751
 *                      road: rua da escola
 *                      propertyAssessment: 23X
 *                      concelho: barcelos
 *                      district: braga
 *                      services:
 *                        - name: Limpeza
 *                          price: 50
 *                        - name: Wi-Fi
 *                          price: 10
 *      responses:
 *        '201':
 *          description: Alojamento criado com sucesso
 *          schema:
 *            $ref: '#/definitions/House'
 *        '401':
 *          description:  Field Missing
 *        '406':
 *          description:  Not Acceptable
 */
router.post('/',[
    check('name').isString(),
    check('doorNumber').isInt(),
    check('floorNumber').isLength({min: 1, max: 12}),
    check('price').isFloat(),
    check('guestsNumber').isInt(),
    check('postalCode').isInt(),
    check('road').isString(),
    check('propertyAssessment').isString(),
    check('concelho').isString(),
    check('district').isString()
], authMiddleware, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return houseController.create(req, res);
});

/**
 * @author Luís Anjo
 * @swagger
 * /houses/{house_id}:
 *  put:
 *     summary: Atualiza um Alojamento existente
 *     tags:
 *       - Houses
 *     parameters:
 *       - name: house_id
 *         in: path
 *         description: ID do Alojamento a ser actualizado
 *         required: true
 *         type: string
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/House'
 *                  example:
 *                      # Properties of a referenced object
 *                      name: Casa T4
 *                      doorNumber: 123456
 *                      floorNumber: 1
 *                      price: 60
 *                      guestsNumber: 3
 *                      postalCode: 4751
 *                      road: rua da escola
 *                      propertyAssessment: 23X
 *                      concelho: barcelos
 *                      district: braga
 *     responses:
 *        '200':
 *          description: Alojamento actualizado com sucesso
 *          schema:
 *            $ref: '#/definitions/House'
 *        '400':
 *          description: Alojamento não existe
 *        '500':
 *          description: Server Error
 */
router.put('/:id',[
    check('name').optional().isString(),
    check('doorNumber').optional().isInt(),
    check('floorNumber').optional().isLength({min: 1, max: 12}),
    check('price').optional().isFloat(),
    check('guestsNumber').optional().isInt(),
    check('postalCode').optional().isInt(),
    check('road').optional().isString(),
    check('propertyAssessment').optional().isString(),
    check('concelho').optional().isString(),
    check('district').optional().isString()
],[
    authMiddleware,
    advertiserMiddleware
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return houseController.update(req, res);
});

/**
 * @author Luís Anjo
 * @swagger
 * /houses/{house_id}:
 *  put:
 *     summary: Atualiza um Alojamento existente
 *     tags:
 *       - Houses
 *     parameters:
 *       - name: house_id
 *         in: path
 *         description: ID do Alojamento a ser actualizado
 *         required: true
 *         type: string
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/House'
 *                  example:
 *                      # Properties of a referenced object
 *                      name: Casa T4
 *                      doorNumber: 123456
 *                      floorNumber: 1
 *                      price: 60
 *                      guestsNumber: 3
 *                      postalCode: 4751
 *                      road: rua da escola
 *                      propertyAssessment: 23X
 *                      concelho: barcelos
 *                      district: braga
 *     responses:
 *        '200':
 *          description: Alojamento actualizado com sucesso
 *          schema:
 *            $ref: '#/definitions/House'
 *        '400':
 *          description: Alojamento não existe
 *        '500':
 *          description: Server Error
 */
router.put('/:id/images',[
],[
    authMiddleware
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return houseController.updateImages(req, res);
});

/**
 * @author Luís Anjo
 */
/**
 * @swagger
 * tags:
 *   name: Houses
 *   description: Endpoints da API relacionados com Casas
 * /houses/{house_id}/status:
 *   put:
 *     summary: Atualizar o estado de uma casa
 *     tags: [Houses]
 *     parameters:
 *       - name: house_id
 *         in: path
 *         description: ID da casa a ser atualizada
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Casa atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/House'
 *       '400':
 *         description: Casa não existe
 *       '500':
 *         description: Erro no servidor
 */

/**
 * @swagger
 * tags:
 *   name: Houses
 *   description: Endpoints da API relacionados com Casas
 * /houses/{house_id}/status/{status_id}:
 *   put:
 *     summary: Atualizar o estado de uma casa
 *     tags: [Houses]
 *     parameters:
 *       - name: house_id
 *         in: path
 *         description: ID da casa a ser atualizada
 *         required: true
 *         schema:
 *           type: integer
 *       - name: status_id
 *         in: path
 *         description: ID do estado a ser atualizado (opcional)
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Casa atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/House'
 *       '400':
 *         description: Casa não existe
 *       '500':
 *         description: Erro no servidor
 */
router.put('/:id/status/:status_id?',[
    check('id').isInt(),
    check('status_id').optional().isInt(),
],[
    authMiddleware,
    advertiserMiddleware
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return houseController.updateStateH(req, res);
});

/**
 * @author Luís Anjo
 * @swagger
 * /houses/{house_id}:
 *  delete:
 *       summary: Remove um alojamento existente
 *       tags:
 *         - Houses
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - name: house_id
 *           in: path
 *           description: ID do alojamento a ser removido
 *           required: true
 *           type: integer
 *       responses:
 *         '200':
 *           description: Alojamento removido com sucesso
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
    return houseController.hardDelete(req, res);
});

/**
 * @author Luís Anjo
 * @swagger
 * /houses:
 *  get:
 *       summary: Devolve Todos os Alojamentos
 *       tags:
 *         - Houses
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
 *                       id:
 *                         type: number
 *                       name:
 *                         type: string
 *                       doorNumber:
 *                         type: number
 *                       floorNumber:
 *                         type: number
 *                       price:
 *                         type: number
 *                       guestsNumber:
 *                         type: number
 *                       road:
 *                         type: string
 *                       propertyAssessment:
 *                         type: string
 *                       StatusHouse:
 *                         type: object
 *                         properties:
 *                            id:
 *                              type: number
 *                            status:
 *                              type: string
 *                       PostalCode:
 *                         type: object
 *                         properties:
 *                            postalcode:
 *                              type: integer
 *                            concelho:
 *                              type: string
 *                            district:
 *                              type: string
 *                       Services:
 *                         type: object
 *                         properties:
 *                            id:
 *                              type: number
 *                            name:
 *                              type: string
 *                            price:
 *                              type: number
 *         '400':
 *           description: Alojamento não existe
 *         '500':
 *           description: Server Error
 */
router.get('/', [

], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return houseController.getAllHouses(req, res);
});

/**
 * @author Luís Anjo
 * @swagger
 * /houses/{house_id}:
 *  get:
 *       summary: Devolve um alojamento existente
 *       tags:
 *         - Houses
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - name: house_id
 *           in: path
 *           description: ID do alojamento
 *           required: true
 *           type: string
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
 *                         type: number
 *                       name:
 *                         type: string
 *                       doorNumber:
 *                         type: number
 *                       floorNumber:
 *                         type: number
 *                       price:
 *                         type: number
 *                       guestsNumber:
 *                         type: number
 *                       road:
 *                         type: string
 *                       propertyAssessment:
 *                         type: string
 *                       status:
 *                         type: object
 *                         properties:
 *                            id:
 *                              type: number
 *                            status:
 *                              type: string
 *                       postalCode:
 *                         type: object
 *                         properties:
 *                            postalCode:
 *                              type: number
 *                            concelho:
 *                              type: string
 *                            district:
 *                              type: string
 *                       services:
 *                         type: object
 *                         properties:
 *                            id:
 *                              type: number
 *                            name:
 *                              type: string
 *                            price:
 *                              type: string
 *         '400':
 *           description: Alojamento não existe
 *         '500':
 *           description: Server Error
 */
router.get('/:id', [    
    // authMiddleware,
    // adminMiddleware,
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return houseController.getHouse(req, res);
});

/**
 * @author João Ponte
 */
/**
 * @swagger
 * /houses/search:
 *  post:
 *      summary: Procurar um alojamento
 *      tags:
 *          - Houses
 *      security:
 *          - bearerAuth: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/House'
 *                  example:
 *                      name: Casa T4
 *                      guestsNumber: 3
 *                      postalCode: 4751
 *                      road: rua da escola
 *                      concelho: barcelos
 *                      district: braga
 *      responses:
 *        '200':
 *          description: Alojamentos encontrados com sucesso
 *          schema:
 *            $ref: '#/definitions/House'
 *        '401':
 *          description:  Field Missing
 *        '406':
 *          description:  Not Acceptable
 */
router.post('/search', [
    check('name').isString().optional(),
    check('guestsNumber').isInt().optional(),
    check('postalCode').isInt().optional(),
    check('road').isString().optional(),
    check('concelho').isString().optional(),
    check('district').isString().optional(),
    check('status').isInt().optional(),
    check('checkin').isDate().optional(),
    check('checkout').isDate().optional()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return houseController.search(req, res);
});

/**
 * @swagger
 * /houses/res/{house_id}:
 *  get:
 *       summary: Devolve um alojamento existente e as suas reservas associadas 
 *       tags:
 *         - Houses
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - name: house_id
 *           in: path
 *           description: ID do alojamento
 *           required: true
 *           type: string
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
*                       reservations:
*                         type: object
*                         properties:
*                            id:
*                              type: integer
*                            init_date:
*                              type: date
*                            end_date:
*                              type: date
*                            user_id:
*                              type: string
*                            house_id:
*                              type: string
*                            state_id:
*                              type: string
 *         '400':
 *           description: Alojamento não existe
 *         '500':
 *           description: Server Error
 */
router.get('/res/:id', [
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return houseController.getReservationFromHouse(req, res);
});

module.exports = router;