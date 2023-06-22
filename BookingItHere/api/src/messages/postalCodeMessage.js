module.exports = {
    success: {
        postalCodeApproval: {
            http: 201,
            code: "postalCodeCreated",
            type: "success"
        },
        postalCodeUpdated: {
            http: 200,
            code: "postalCodeUpdated",
            type: "success"
        },
        postalCodeDeleted: {
            http: 200,
            code: "postalCodeDeleted",
            type: "success"
        },
        postalCodeExists:{
            http: 202,
            code: "postalCodeExists",
            type: "success"
        }
    },
    error: {
        fieldMissing: {
            http: 401,
            code: "FieldMissing",
            type: "error"
        },
        postalCodeAlreadyRegisted: {
            http: 401,
            code: "postalCodeAlreadyRegisted",
            type: "error"
        },
        postalCodeDontExist: {
            http: 400,
            code: "postalCodeDontExist",
            type: "error"
        }
    }
}