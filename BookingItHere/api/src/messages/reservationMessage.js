module.exports = {
    success: {
        reservationApproval: {
            http: 201,
            code: "reservationApproval",
            type: "success"
        },
        reservationUpdated: {
            http: 200,
            code: "reservationUpdated",
            type: "success"
        },
        reservationDeleted: {
            http: 200,
            code: "reservationDeleted",
            type: "success"
        }
    },
    error: {
        fieldMissing: {
            http: 401,
            code: "FieldMissing",
            type: "error"
        },
        reservationAlreadyRegisted: {
            http: 401,
            code: "ReservationAlreadyRegisted",
            type: "error"
        },
        guestsNumberExceeded: {
            http: 400,
            code: "GuestsNumberExceeded",
            type: "error"
        },
        pastDate: {
            http: 400,
            code: "PastDate",
            type: "error"
        },
        invalidDate: {
            http: 400,
            code: "InvalidDate",
            type: "error"
        },
        reservationDontExist: {
            http: 400,
            code: "ReservationDontExist",
            type: "error"
        }
    }
}