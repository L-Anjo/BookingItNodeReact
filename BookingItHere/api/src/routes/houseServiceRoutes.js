//@todo SEM USO PARA JA APAGAR DEPOIS
// const express = require('express');
// const router = express.Router();
// const houseServiceController = require("../controllers/houseServicesController");
// const {
//     param,
//     check,
//     validationResult
// } = require('express-validator');
// /**
//  * @swagger
//  * /houseServices:
//  *  post:
//  *      summary: Coloca os serviços existentes em alojamentos
//  *      tags:
//  *          - HouseServices
//  *      requestBody:
//  *          required: true
//  *          content:
//  *              application/json:
//  *                  schema:
//  *                      $ref: '#/definitions/HouseServices'
//  *                  example:
//  *                      house: 1
//  *                      service: 1
//  *      responses:
//  *        '201':
//  *          description: Serviço colocado no alojamento com sucesso
//  *          schema:
//  *            $ref: '#/definitions/HouseServices'
//  *        '401':
//  *          description:  Field Missing
//  *        '406':
//  *          description:  Not Acceptable
//  */
// router.post('/', [
//     check('house').isInt(),
//     check('service').isInt()
// ], (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(406).json({errors: errors.array()});
//     }
//     return houseServiceController.create(req, res);
// });
//
// /**
//  * @swagger
//  * /houseServices/{houseServices_id}:
//  *  put:
//  *     summary: Atualiza os serviços do alojamento
//  *     tags:
//  *       - HouseServices
//  *     parameters:
//  *       - name: houseServices_id
//  *         in: path
//  *         description: ID a ser atualizado
//  *         required: true
//  *         type: integer
//  *     requestBody:
//  *          required: true
//  *          content:
//  *              application/json:
//  *                  schema:
//  *                      $ref: '#/definitions/HouseServices'
//  *                  example:
//  *                      # Properties of a referenced object
//  *                      house: 1
//  *                      service: 1
//  *     responses:
//  *        '200':
//  *          description: Serviços do alojamento atualizados com sucesso
//  *          schema:
//  *            $ref: '#/definitions/HouseServices'
//  *        '400':
//  *          description: Serviços do alojamento não existe
//  *        '500':
//  *          description: Server Error
//  */
// router.put('/:id', [
//     check('house').isInt(),
//     check('service').isInt()
// ], (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(406).json({errors: errors.array()});
//     }
//     return houseServiceController.update(req, res);
// });
//
// /**
//  * @swagger
//  * /houseServices/{houseServices_id}:
//  *  delete:
//  *       summary: Remove os serviços do alojamento
//  *       tags:
//  *         - HouseServices
//  *       parameters:
//  *         - name: houseServices_id
//  *           in: path
//  *           description: ID a ser removido
//  *           required: true
//  *           type: integer
//  *       responses:
//  *         '200':
//  *           description: Serviços do alojamento removidos com sucesso
//  *         '404':
//  *           description: Not Found
//  *         '500':
//  *           description: Server Error
//  */
// router.delete('/:id', [
// ], (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(406).json({errors: errors.array()});
//     }
//     return houseServiceController.delete(req, res);
// });
//
//
//
//
// module.exports = router;