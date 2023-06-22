const swaggerJSDoc = require('swagger-jsdoc');
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Express API for BookingItHere',
        version: '1.0.0',
        description:
            'This is a REST API application made with Express.',
        license: {
            name: 'Licensed Under MIT',
            url: 'https://spdx.org/licenses/MIT.html',
        },
        contact: {
            name: 'BookingItHere',
            url: 'https://www.BookingItHere.com',
        },
    },
    servers: [
        {
            url: process.env.CLIENT_API_BASE_URL,
            description: 'Development server',
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            }
        }
    },
    security: [{
        bearerAuth: []
    }]
};
const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: [
        './src/routes/*.js',
        './src/models/*.js'
    ]
};
const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
