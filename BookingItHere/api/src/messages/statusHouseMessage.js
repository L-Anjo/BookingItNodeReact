module.exports = {
    success: {
        statusHouseApproval: {
            http: 201,
            code: "statusCreated",
            type: "success"
        },
        statusHouseUpdated: {
            http: 200,
            code: "statusUpdated",
            type: "success"
        },
        statusHouseDeleted: {
            http: 200,
            code: "statusDeleted",
            type: "success"
        }
    },
    error: {
        fieldMissing: {
            http: 401,
            code: "FieldMissing",
            type: "error"
        },
        statusHouseAlreadyRegisted: {
            http: 401,
            code: "statusAlreadyRegisted",
            type: "error"
        },
        statusHouseDontExist: {
            http: 400,
            code: "statusDontExist",
            type: "error"
        }
    }
}