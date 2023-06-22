module.exports = {
    success: {
        announcementApproval: {
            http: 201,
            code: "announcementInApproval",
            type: "success"
        },
        announcementUpdated: {
            http: 200,
            code: "announcementUpdated",
            type: "success"
        },
        announcementDeleted: {
            http: 200,
            code: "announcementDeleted",
            type: "success"
        }
    },
    error: {
        fieldMissing: {
            http: 401,
            code: "FieldMissing",
            type: "error"
        },
        announcementAlreadyRegisted: {
            http: 401,
            code: "announcementAlreadyRegisted",
            type: "error"
        },
        announcementDontExist: {
            http: 400,
            code: "announcementDontExist",
            type: "error"
        }
    }
}