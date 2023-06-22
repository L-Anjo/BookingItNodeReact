const express = require('express');
const router = express.Router();
const announcementController = require("../controllers/announcementController");
const advertiserMiddleware = require("../middlewares/advertiserMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");
const {
    check,
    validationResult
} = require('express-validator');

/**
 * @author Diogo
 * @swagger
 * /announcements:
 *  post:
 *      summary: Cria um novo anuncio
 *      tags:
 *          - Announcements
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/Announcement'
 *                  example:
 *                      house_id: 1
 *                      priceClick: 0.2
 *                      numbClicks: 80
 *                      end_date: 2023-08-27
 *      responses:
 *        '201':
 *          description: Anuncio criado com sucesso
 *          schema:
 *            $ref: '#/definitions/Announcement'
 *        '401':
 *          description:  Field Missing
 *        '406':
 *          description:  Not Acceptable
 */
router.post('/', [
    authMiddleware,
    advertiserMiddleware,
    check('house_id').isInt(),
    check('numbClicks').isInt()
],  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return announcementController.create(req, res);
});

/**
 * @author Diogo
 * @swagger
 * /announcements/{announcement_id}:
 *  put:
 *     summary: Atualiza um Anuncio existente
 *     tags:
 *       - Announcements
 *     parameters:
 *       - name: announcement_id
 *         in: path
 *         description: ID do Anuncio a ser actualizado
 *         required: true
 *         type: string
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/Announcement'
 *                  example:
 *                      # Properties of a referenced object
 *                      house_id: 1
 *                      priceClick: 0,2
 *                      numbClicks: 80
 *                      end_date: 2023-08-27
 *     responses:
 *        '200':
 *          description: Anuncio actualizado com sucesso
 *          schema:
 *            $ref: '#/definitions/Announcement'
 *        '400':
 *          description: Anuncio não existe
 *        '500':
 *          description: Server Error
 */
router.put('/:id', [
    authMiddleware,
    advertiserMiddleware,
    check('house_id').isInt(),
    check('priceClick').isFloat(),
    check('numbClicks').isInt(),
    check('end_date').isDate()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return announcementController.update(req, res);
});

/**
 * @author Luís
 * @swagger
 * /announcements/{announcement_id}/clicks:
 *  put:
 *     summary: Atualiza um Anuncio existente
 *     tags:
 *       - Announcements
 *     parameters:
 *       - name: announcement_id
 *         in: path
 *         description: ID do Anuncio a ser actualizado
 *         required: true
 *         type: string
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/Announcement'
 *                  example:
 *                      # Properties of a referenced object
 *                      numbClicks: 80
 *     responses:
 *        '200':
 *          description: Anuncio actualizado com sucesso
 *          schema:
 *            $ref: '#/definitions/Announcement'
 *        '400':
 *          description: Anuncio não existe
 *        '500':
 *          description: Server Error
 */
router.put('/:id/clicks', (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return announcementController.updateClicks(req, res);
});

/**
 * @author Diogo
 * @swagger
 * /announcements/{announcement_id}:
 *  delete:
 *       summary: Remove um anuncio existente
 *       tags:
 *         - Announcements
 *       parameters:
 *         - name: announcement_id
 *           in: path
 *           description: ID do anuncio a ser removido
 *           required: true
 *           type: integer
 *       responses:
 *         '200':
 *           description: Anuncio removido com sucesso
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
    return announcementController.hardDelete(req, res);
});

/**
 * @author Diogo
 * @swagger
 * /announcements/{announcement_id}:
 *  get:
 *       summary: Devolve um anuncio existente
 *       tags:
 *         - Announcements
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - name: announcement_id
 *           in: path
 *           description: ID do anuncio
 *           required: true
 *           type: integer
 *       responses:
 *         '200':
 *           description: Anuncio
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
 *                       house_id:
 *                         type: integer
 *                       priceClick:
 *                         type: float
 *                       numbClicks:
 *                         type: integer
 *                       state:
 *                         type: integer
 *                       end_date:
 *                         type: date
 *         '400':
 *           description: Anuncio não existe
 *         '500':
 *           description: Server Error
 */
router.get('/:id', [
    authMiddleware,
    advertiserMiddleware,
    check('id').isInt()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return announcementController.getAnnouncement(req, res);
});

/**
 * @author Diogo
 * @swagger
 * /announcement/search:
 *  post:
 *      summary: Procura um anuncio
 *      tags:
 *          - Announcements
 *      security:
 *          - bearerAuth: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/Announcement'
 *                  example:
 *                      house_id: 1
 *      responses:
 *        '201':
 *          description: Retorna os anuncios referentes à pesquisa
 *          schema:
 *            $ref: '#/definitions/Announcement'
 *        '401':
 *          description:  Field Missing
 *        '406':
 *          description:  Not Acceptable
 */
router.post('/search', [
    check('house_id').isInt().optional(),
    check('priceClick').isFloat().optional(),
    check('numbClicks').isInt(),
    check('end_date').isDate()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return announcementController.search(req, res);
});


/**
 * @author Diogo
 * @swagger
 * /announcements:
 *  get:
 *       summary: Devolve Todos os anuncios
 *       tags:
 *         - Announcements
 *       responses:
 *         '200':
 *           description: Anuncios
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
 *                       house_id:
 *                         type: integer
 *                       priceClick:
 *                         type: float
 *                       numbClicks:
 *                         type: integer
 *                       state:
 *                         type: integer
 *                       end_date:
 *                         type: date
 *         '400':
 *           description: Anuncio não existe
 *         '500':
 *           description: Server Error
 */
router.get('/', [
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return announcementController.getAllAnnouncements(req, res);
});



/**
 * @swagger
 * tags:
 *   name: Announcements
 *   description: Endpoints da API relacionados com Anuncios
 * /announcements/{announcement_id}/state:
 *   put:
 *     summary: Atualizar o estado de um anuncio
 *     tags: [Announcements]
 *     parameters:
 *       - name: announcement_id
 *         in: path
 *         description: ID do anuncio a ser atualizado
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Anuncio atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Announcement'
 *       '400':
 *         description: Anuncio não existe
 *       '500':
 *         description: Erro no servidor
 */
router.put('/:id/state',[
    check('id').isInt(),
],[
    authMiddleware,
    adminMiddleware
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return announcementController.updateStateA(req, res);
});

module.exports = router;