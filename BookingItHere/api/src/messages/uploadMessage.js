module.exports = {
    success: {
        uploadSuccess: {
            http: 200,
            code: "FileUploaded",
            type: "success"
        }
    },
    error: {
        fieldMissing: {
            http: 401,
            code: "FieldMissing",
            type: "error"
        },
        uploadError: {
            http: 401,
            code: "FileNotUploaded",
            type: "error"
        }
    }
}