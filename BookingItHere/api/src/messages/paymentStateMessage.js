module.exports = {
    success: {
        paymentStateApproval: {
            http: 201,
            code: "paymentStateInApproval",
            type: "success"
        },
        paymentStateUpdated: {
            http: 200,
            code: "paymentStateUpdated",
            type: "success"
        },
        paymentStateDeleted: {
            http: 200,
            code: "paymentStateDeleted",
            type: "success"
        }
    },
    error: {
        fieldMissing: {
            http: 401,
            code: "FieldMissing",
            type: "error"
        },
        paymentStateAlreadyRegisted: {
            http: 401,
            code: "paymentStateRegisted",
            type: "error"
        },
        paymentStateDontExist: {
            http: 400,
            code: "paymentStateDontExist",
            type: "error"
        }
    }
}