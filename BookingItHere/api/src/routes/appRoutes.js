const express = require('express');
const router = express.Router();

/**
 * @author João Ponte
 * @swagger
 * /healthcheck:
 *  get:
 *     tags:
 *     - Healthcheck
 *     description: Returns API operational status
 *     responses:
 *       200:
 *         description: API is  running
 */
router.get('/healthcheck', (req, res) => res.sendStatus(200))

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'BookingItHere API',
        version: '1.0.0'
    });
});

module.exports = router;