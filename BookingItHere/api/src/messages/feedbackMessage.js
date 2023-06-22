module.exports = {
    success: {
        feedbackApproval: {
            http: 201,
            code: "feedbackInApproval",
            type: "success"
        },
        feedbackUpdated: {
            http: 200,
            code: "feedbackUpdated",
            type: "success"
        },
        feedbackDeleted: {
            http: 200,
            code: "feedbackDeleted",
            type: "success"
        }
    },
    error: {
        fieldMissing: {
            http: 401,
            code: "FieldMissing",
            type: "error"
        },
        feedbackAlreadyRegisted: {
            http: 401,
            code: "feedbackAlreadyRegisted",
            type: "error"
        },
        feedbackDontExist: {
            http: 400,
            code: "feedbackDontExist",
            type: "error"
        }
    }
}