module.exports = {
    success: {
        houseServiceApproval: {
            http: 201,
            code: "houseServiceInApproval",
            type: "success"
        },
        houseServiceUpdated: {
            http: 200,
            code: "houseServiceUpdated",
            type: "success"
        },
        houseServiceDeleted: {
            http: 200,
            code: "houseServiceDeleted",
            type: "success"
        }
    },
    error: {
        fieldMissing: {
            http: 401,
            code: "FieldMissing",
            type: "error"
        },
        houseServiceAlreadyRegisted: {
            http: 401,
            code: "houseServiceAlreadyRegisted",
            type: "error"
        },
        houseServiceDontExist: {
            http: 400,
            code: "houseServiceDontExist",
            type: "error"
        }
    }
}