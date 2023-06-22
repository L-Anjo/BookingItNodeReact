module.exports = {
    success: {
        reservationServiceApproval: {
            http: 201,
            code: "reservationServiceInApproval",
            type: "success"
        },
        reservationServiceUpdated: {
            http: 200,
            code: "reservationServiceUpdated",
            type: "success"
        },
        reservationServiceDeleted: {
            http: 200,
            code: "reservationServiceDeleted",
            type: "success"
        }
    },
    error: {
        fieldMissing: {
            http: 401,
            code: "FieldMissing",
            type: "error"
        },
        reservationServiceAlreadyRegisted: {
            http: 401,
            code: "reservationServiceAlreadyRegisted",
            type: "error"
        },
        reservationServiceDontExist: {
            http: 400,
            code: "reservationServiceDontExist",
            type: "error"
        }
    }
}