module.exports = {
    success: {
        userCreated: {
            http: 201,
            code: "UserCreated",
            type: "success"
        },
        userUpdated: {
            http: 200,
            code: "UserUpdated",
            type: "success"
        },
        userDeleted: {
            http: 200,
            code: "UserDeleted",
            type: "success"
        }
    },
    error: {
        fieldMissing: {
            http: 401,
            code: "FieldMissing",
            type: "error"
        },
        emailAlreadyRegisted: {
            http: 401,
            code: "EmailAlreadyRegisted",
            type: "error"
        },
        userDontExist: {
            http: 400,
            code: "UserDontExist",
            type: "error"
        }
    }
}