module.exports = {
    success: {
        announcementPaymentApproval: {
            http: 201,
            code: "announcementPaymentInApproval",
            type: "success"
        },
        announcementPaymentUpdated: {
            http: 200,
            code: "announcementPaymentUpdated",
            type: "success"
        },
        announcementPaymentDeleted: {
            http: 200,
            code: "announcementPaymentDeleted",
            type: "success"
        }
    },
    error: {
        fieldMissing: {
            http: 401,
            code: "FieldMissing",
            type: "error"
        },
        announcementPaymentAlreadyRegisted: {
            http: 401,
            code: "announcementPaymentAlreadyRegisted",
            type: "error"
        },
        announcementPaymentDontExist: {
            http: 400,
            code: "announcementPaymentDontExist",
            type: "error"
        }
    }
}