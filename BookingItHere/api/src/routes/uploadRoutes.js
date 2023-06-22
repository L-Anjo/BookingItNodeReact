const express = require('express');
const {validationResult, param} = require("express-validator");
const uploadController = require("../controllers/uploadController");
const router = express.Router();

/**
 * @author João Ponte
 * @swagger
 * paths:
 *   /uploads:
 *     post:
 *       summary: Endpoint para upload de arquivos
 *       tags:
 *         - Uploads
 *       consumes:
 *         - multipart/form-data
 *       parameters:
 *         - in: formData
 *           name: file
 *           type: file
 *           required: true
 *           description: Arquivo a ser carregado
 *
 *       responses:
 *         '201':
 *           description: Upload concluído com sucesso
 *         '401':
 *           description:  Field Missing
 *         '406':
 *           description:  Not Acceptable
 */
router.post('/', (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({errors: errors.array()});
    }
    return uploadController.uploadFile(req, res);
});

module.exports = router;