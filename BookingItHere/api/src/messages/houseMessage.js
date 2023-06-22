module.exports = {
    success: {
        houseApproval: {
            http: 201,
            code: "houseInApproval",
            type: "success"
        },
        houseUpdated: {
            http: 200,
            code: "houseUpdated",
            type: "success"
        },
        houseDeleted: {
            http: 200,
            code: "houseDeleted",
            type: "success"
        }
    },
    error: {
        fieldMissing: {
            http: 401,
            code: "FieldMissing",
            type: "error"
        },
        houseAlreadyRegisted: {
            http: 401,
            code: "HouseAlreadyRegisted",
            type: "error"
        },
        houseDontExist: {
            http: 400,
            code: "houseDontExist",
            type: "error"
        },
        houseStatusDontExist: {
            http: 400,
            code: "houseStatusDontExist",
            type: "error"
        }
    }
}