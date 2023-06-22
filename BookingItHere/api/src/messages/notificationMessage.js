module.exports = {
    success: {
        notificationApproval: {
            http: 201,
            code: "notificationCreated",
            type: "success"
        },
        notificationUpdated: {
            http: 200,
            code: "notificationUpdated",
            type: "success"
        },
        notificationDeleted: {
            http: 200,
            code: "notificationDeleted",
            type: "success"
        }
    },
    error: {
        fieldMissing: {
            http: 401,
            code: "FieldMissing",
            type: "error"
        },
        notificationAlreadyRegisted: {
            http: 401,
            code: "notificationAlreadyRegisted",
            type: "error"
        },
        notificationDontExist: {
            http: 400,
            code: "notificationDontExist",
            type: "error"
        }
    }
}
