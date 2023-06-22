const express = require('express');
const router = express.Router();
const postalCodeController = require("../controllers/postalCodeController");
const {
    param,
    check,
    validationResult
} = require('express-validator');

/**
 * @author Luís Anjo
 * @swagger
 * /postalcodes:
 *  post:
 *      summary: Cria um novo codigo Postal
 *      tags:
 *          - PostalCodes
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/PostalCode'
 *                  example:
 *                      postalCode: 4751
 *                      concelho: barcelos
 *                      district: braga
 *      responses:
 *        '201':
 *          description: Codigo Postal criado com sucesso
 *          schema:
 *            $ref: '#/definitions/PostalCode'
 *        '401':
 *          description:  Field Missing
 *        '406':
 *          description:  Not Acceptable
 */
router.post('/', [
    check('postalCode').isInt(),
    check('concelho').isString(),
    check('district').isString()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return postalCodeController.create(req, res);
});



/**
 * @author Luís Anjo
 * @swagger
 * /postalcodes/{postalcode_id}:
 *  put:
 *     summary: Atualiza um Codigo Postal
 *     tags:
 *       - PostalCodes
 *     parameters:
 *       - name: postalcode_id
 *         in: path
 *         description: ID do Codigo Postal a ser actualizado
 *         required: true
 *         type: string
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/PostalCode'
 *                  example:
 *                      # Properties of a referenced object
 *                      postalCode: 4751
 *                      concelho: barcelos
 *                      district: braga
 *     responses:
 *        '200':
 *          description: Código Postal actualizado com sucesso
 *          schema:
 *            $ref: '#/definitions/PostalCode'
 *        '400':
 *          description: Código Postal não existe
 *        '500':
 *          description: Server Error
 */
router.put('/:id', [
    check('postalCode').isInt(),
    check('concelho').isString(),
    check('district').isString()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return postalCodeController.update(req, res);
});

/**
 * @author Luís Anjo
 * @swagger
 * /postalcodes/{postalcode_id}:
 *  delete:
 *       summary: Remove um codigo postal existente
 *       tags:
 *         - PostalCodes
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - name: postalcode_id
 *           in: path
 *           description: ID do código postal a ser removido
 *           required: true
 *           type: integer
 *       responses:
 *         '200':
 *           description: Código Postal removido com sucesso
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
    return postalCodeController.hardDelete(req, res);
});

/**
 * @author Luís Anjo
 * @swagger
 * /postalcodes/{postalCode}:
 *  get:
 *       summary: Devolve o Código Postal
 *       tags:
 *         - PostalCodes
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - name: postalCode
 *           in: path
 *           description: Código Postal
 *           required: true
 *           type: string
 *       responses:
 *         '200':
 *           description: Código Postal
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   data:
 *                     type: object
 *                     properties:
 *                       postal_code:
 *                         type: number
 *                       concelho:
 *                         type: string
 *                       district:
 *                         type: string
 *                       created_at:
 *                         type: string
 *                       updated_at:
 *                         type: string
 *         '400':
 *           description: Código Postal não existe
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
    return postalCodeController.get(req, res);
});

module.exports = router;

