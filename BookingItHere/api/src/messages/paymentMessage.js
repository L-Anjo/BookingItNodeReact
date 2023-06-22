module.exports = {
    success: {
        paymentApproval: {
            http: 201,
            code: "paymentInApproval",
            type: "success"
        },
        paymentUpdated: {
            http: 200,
            code: "paymentUpdated",
            type: "success"
        },
        paymentDeleted: {
            http: 200,
            code: "paymentDeleted",
            type: "success"
        }
    },
    error: {
        fieldMissing: {
            http: 401,
            code: "FieldMissing",
            type: "error"
        },
        paymentAlreadyRegisted: {
            http: 401,
            code: "paymentAlreadyRegisted",
            type: "error"
        },
        paymentDontExist: {
            http: 400,
            code: "paymentDontExist",
            type: "error"
        }
    }
}