module.exports = {
    success: {
        userTypeCreated: {
            http: 201,
            code: "UserTypeCreated",
            type: "success"
        },
        userTypeUpdated: {
            http: 200,
            code: "UserTypeUpdated",
            type: "success"
        },
        userTypeDeleted: {
            http: 200,
            code: "UserTypeDeleted",
            type: "success"
        }
    },
    error: {
        fieldMissing: {
            http: 401,
            code: "FieldMissing",
            type: "error"
        },
        userTypeAlreadyRegisted: {
            http: 401,
            code: "UserTypeAlreadyRegisted",
            type: "error"
        },
        userTypeDontExist: {
            http: 400,
            code: "UserTypeDontExist",
            type: "error"
        }
    }
}