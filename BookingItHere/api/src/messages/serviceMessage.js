module.exports = {
    success: {
        serviceApproval: {
            http: 201,
            code: "serviceInApproval",
            type: "success"
        },
        serviceUpdated: {
            http: 200,
            code: "serviceUpdated",
            type: "success"
        },
        serviceDeleted: {
            http: 200,
            code: "serviceDeleted",
            type: "success"
        }
    },
    error: {
        fieldMissing: {
            http: 401,
            code: "FieldMissing",
            type: "error"
        },
        serviceAlreadyRegisted: {
            http: 401,
            code: "serviceAlreadyRegisted",
            type: "error"
        },
        serviceDontExist: {
            http: 400,
            code: "serviceDontExist",
            type: "error"
        }
    }
}