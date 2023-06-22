const express = require('express');
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");
const authMiddleware = require("../middlewares/authMiddleware");
const advertiserMiddleware = require("../middlewares/advertiserMiddleware");
const adminMiddleware = require('../middlewares/adminMiddleware');
const {
    check,
    validationResult
} = require('express-validator');
/**
 * @swagger
 * /feedbacks:
 *  post:
 *      summary: Cria um novo feedback
 *      tags:
 *          - Feedbacks
 *      security:
 *          - bearerAuth: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/Feedback'
 *                  example:
 *                      reservation: 1
 *                      comment: Muito bom
 *                      classification: 5
 *      responses:
 *        '201':
 *          description: Feedback criado com sucesso
 *          schema:
 *            $ref: '#/definitions/Feedback'
 *        '401':
 *          description:  Field Missing
 *        '406':
 *          description:  Not Acceptable
 */
router.post('/', [
    check('reservation').isInt(),
    check('comment').isString(),
    check('classification').isInt({min: 1, max: 5})
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return feedbackController.create(req, res);
});

/**
 * @swagger
 * /feedbacks/{feedback_id}:
 *  put:
 *     summary: Atualiza um feedback existente
 *     tags:
 *       - Feedbacks
 *     parameters:
 *       - name: feedback_id
 *         in: path
 *         description: ID do feedback
 *         required: true
 *         type: integer
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/Feedback'
 *                  example:
 *                      # Properties of a referenced object
 *                      comment: Muito bom
 *                      classification: 5
 *     responses:
 *        '200':
 *          description: Feedback atualizado com sucesso
 *          schema:
 *            $ref: '#/definitions/Feedback'
 *        '400':
 *          description: Feedback não existe
 *        '500':
 *          description: Server Error
 */
router.put('/:id',[
    check('comment').isString(),
    check('classification').isInt({min: 1, max: 5})
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return feedbackController.update(req, res);
});

/**
 * @swagger
 * /feedbacks/{feedback_id}:
 *  delete:
 *       summary: Remove um feedback existente
 *       tags:
 *         - Feedbacks
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - name: feedback_id
 *           in: path
 *           description: ID do feedback a ser removido
 *           required: true
 *           type: integer
 *       responses:
 *         '200':
 *           description: Feedback removido com sucesso
 *         '404':
 *           description: Not Found
 *         '500':
 *           description: Server Error
 */
router.delete('/:id', [
authMiddleware,
advertiserMiddleware,
adminMiddleware,
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return feedbackController.delete(req, res);
});

/**
 * @swagger
 * /feedbacks/{feedback_id}:
 *  get:
 *       summary: Devolve um feedback existente
 *       tags:
 *         - Feedbacks
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - name: feedback_id
 *           in: path
 *           description: ID do feedback
 *           required: true
 *           type: integer
 *       responses:
 *         '200':
 *           description: Feedback
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
 *                       reservation:
 *                         type: string
 *                       comment:
 *                         type: string
 *                       classification:
 *                         type: string
 *         '400':
 *           description: Feedback não existe
 *         '500':
 *           description: Server Error
 */
router.get('/:id', [
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return feedbackController.getFeedback(req, res);
});

/**
 * @swagger
 * /feedbacks/search:
 *  post:
 *      summary: Procura um feedback
 *      tags:
 *          - Feedbacks
 *      security:
 *          - bearerAuth: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/Feedback'
 *                  example:
 *                      reservation: 1
 *                      classification: 5
 *      responses:
 *        '201':
 *          description: Retorna os feedbacks referentes à pesquisa
 *          schema:
 *            $ref: '#/definitions/Feedback'
 *        '401':
 *          description:  Field Missing
 *        '406':
 *          description:  Not Acceptable
 */
router.post('/search', [
    check('reservation').isInt().optional(),
    check('classification').isInt().optional()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return feedbackController.search(req, res);
});

/**
 * @swagger
 * /feedbacks:
 *  get:
 *       summary: Devolve Todos os feedbacks
 *       tags:
 *         - Feedbacks
 *       responses:
 *         '200':
 *           description: Feedbacks
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
 *                       reservation:
 *                         type: string
 *                       comment:
 *                         type: string
 *                       classification:
 *                         type: string
 *         '400':
 *           description: Feedback não existe
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
    return feedbackController.getAllFeedbacks(req, res);
});

module.exports = router;