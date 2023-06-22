const userTypeMessage = require("../messages/userTypeMessage")
const UserType = require("../models/UserType");

/**
 * GET ALL
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.getAllUserType = async (req, res) => {
    try {
        const usertypes = await UserType.findAll();
        if(!usertypes){
            return res.status(userTypeMessage.error.userTypeDontExist.http).send(userTypeMessage.error.userTypeDontExist);
        }

        return res.status(200).send({usertypes});
    } catch (err) {
        console.error('Error during registration', err);

        return res.status(500).send({error: 'Internal server error'});
    }
}

/**
 * GET
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.getUserType = async (req, res) => {
    try {
        const { id } = req.params;
        const usertype = await UserType.findByPk(id);
        if(!usertype){
            return res.status(userTypeMessage.error.userTypeDontExist.http).send(userTypeMessage.error.userTypeDontExist);
        }

        return res.status(200).send({data: usertype});
    } catch (err) {
        console.error('Error during registration', err);

        return res.status(500).send({error: 'Internal server error'});
    }
}

/**
 * Register
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.create = async (req, res) => {
    try {
        if(!req.body.name){
            return res.status(userTypeMessage.error.fieldMissing.http).send(userTypeMessage.error.fieldMissing);
        }

        let exist = await UserType.findOne({where: {name: req.body.name}})

        if(exist){
            return res.status(userTypeMessage.error.userTypeAlreadyRegisted.http).send(userTypeMessage.error.userTypeAlreadyRegisted);
        }

        userTypeMessage.success.userTypeCreated.data = await UserType.create({name: req.body.name})

        return res.status(userTypeMessage.success.userTypeCreated.http).send(userTypeMessage.success.userTypeCreated);
    } catch (err) {
        console.error('Error during registration', err);

        return res.status(500).send({error: 'Internal server error'});
    }
};

/**
 * Update
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.update = async (req, res) => {
    try {
        if(!req.body.name){
            return res.status(userTypeMessage.error.fieldMissing.http).send(userTypeMessage.error.fieldMissing);
        }

        const { id } = req.params;

        let exist = await UserType.findOne({where: {name: req.body.name}})

        if(exist){
            return res.status(userTypeMessage.error.userTypeAlreadyRegisted.http).send(userTypeMessage.error.userTypeAlreadyRegisted);
        }

        const updatedRows = await UserType.update(
            {
                name: req.body.name,
                code: req.body.code
            },
            {
                where: { id: id },
            }
        );

        if(parseInt(updatedRows)) {
            return res.status(userTypeMessage.success.userTypeUpdated.http).send(userTypeMessage.success.userTypeUpdated);
        }

        return res.status(userTypeMessage.error.userTypeDontExist.http).send(userTypeMessage.error.userTypeDontExist);
    } catch (err) {
        console.error('Error during registration', err);

        return res.status(500).send({error: 'Internal server error'});
    }
};

/**
 * Hard Delete
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.hardDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const userType = await UserType.findByPk(id);
        if(!userType){
            return res.status(userTypeMessage.error.userTypeDontExist.http).send(userTypeMessage.error.userTypeDontExist);
        }

        if (!userType){
            return res.status(userTypeMessage.error.userTypeDontExist.http).send(userTypeMessage.error.userTypeDontExist);
        }

        await userType.destroy();
        return res.status(userTypeMessage.success.userTypeDeleted.http).send(userTypeMessage.success.userTypeDeleted);


    } catch (err) {
        console.error('Error during registration', err);

        return res.status(500).send({error: 'Internal server error'});
    }
};
