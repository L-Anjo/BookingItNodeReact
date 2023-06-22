const express = require('express');
const router = express.Router();
const swaggerSpec = require('../config/swagger')
const swaggerUi = require("swagger-ui-express");

// Swagger
router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Documentation in JSON format
router.use('/json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
});

module.exports = router;