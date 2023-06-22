module.exports = {
    success: {
        reservationStateApproval: {
            http: 201,
            code: "reservationStateInApproval",
            type: "success"
        },
        reservationStateUpdated: {
            http: 200,
            code: "reservationStateUpdated",
            type: "success"
        },
        reservationStateDeleted: {
            http: 200,
            code: "reservationStateDeleted",
            type: "success"
        }
    },
    error: {
        fieldMissing: {
            http: 401,
            code: "FieldMissing",
            type: "error"
        },
        reservationStateAlreadyRegisted: {
            http: 401,
            code: "reservationStateRegisted",
            type: "error"
        },
        reservationStateDontExist: {
            http: 400,
            code: "reservationStateDontExist",
            type: "error"
        }
    }
}