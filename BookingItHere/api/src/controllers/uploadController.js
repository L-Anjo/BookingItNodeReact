const uploadMessage = require('../messages/uploadMessage')

/**
 * Upload File
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.uploadFile = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(uploadMessage.error.fieldMissing.http).json(uploadMessage.error.fieldMissing);
    }
    try {
        const newpath =  `${__dirname}/../public/images/`;
        const uploadFile = req.files.file;
        const name = uploadFile.name;
        const newName = `${Date.now()}_${name}`;
        const uploadPath = newpath + newName;

        await uploadFile.mv(uploadPath, function(err) {
            if (!err) {
                uploadMessage.success.uploadSuccess.file = newName;
                uploadMessage.success.uploadSuccess.url = `${process.env.CLIENT_API_BASE_URL}/images/${newName}`;
                res.status(uploadMessage.success.uploadSuccess.http).json(uploadMessage.success.uploadSuccess);
            } else {
                return res.status(uploadMessage.error.uploadError.http).json(uploadMessage.error.uploadError);
            }
        });
    } catch (err) {
        console.error('Error during registration', err);

        return res.status(500).json({error: 'Internal server error'});
    }
}