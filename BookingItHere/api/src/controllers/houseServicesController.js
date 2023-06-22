//@todo SEM USO PARA JA APAGAR DEPOIS
// const houseServiceMessage = require("../messages/houseServiceMessage");
// const {body, validationResult} = require("express-validator");
// const houseMessage = require('../messages/houseMessage');
// const serviceMessage = require('../messages/serviceMessage');
//
// /**
//  * Create
//  * @param req
//  * @param res
//  * @returns {Promise<*>}
//  */
// exports.create = async (req, res) => {
//     const {house, service} = req.body;
//
//     try {
//         if (!house || !service) {
//             return res.status(houseServiceMessage.error.fieldMissing.http).send(houseServiceMessage.error.fieldMissing);
//         }
//
//         let findHouse = await House.findOne({_id: house});
//         let findService = await Service.findOne({_id: service});
//
//         if (!findHouse) {
//             return res.status(houseMessage.error.houseDontExist.http).send(houseMessage.error.houseDontExist);
//         }
//         if (!findService) {
//             return res.status(serviceMessage.error.serviceDontExist.http).send(serviceMessage.error.serviceDontExist);
//         }
//
//         //FAZER UMA VERIFICAÇÃO CASO O ALOJAMENTO JÁ TENHA ESSE SERVIÇO
//         // let house = await House.findOne({ propertyAssessment,postalCode: findCodPostal._id }).populate('postalCode');
//         //  if (house) {
//         //      return res.status(houseMessage.error.houseAlreadyRegisted.http).send(houseMessage.error.houseAlreadyRegisted);
//         //  }
//
//         let houseService = new HouseService({house: house, service: service});
//
//         await houseService.save();
//         return res.status(houseServiceMessage.success.houseServiceApproval.http).send(houseServiceMessage.success.houseServiceApproval);
//     } catch (err) {
//         console.error('Erro during creation', err);
//
//         return res.status(500).send({error: 'Internal server error'});
//     }
// };
//
//
// /**
//  * Update
//  * @param req
//  * @param res
//  * @returns {Promise<*>}
//  */
// exports.update = async (req, res) => {
//     try {
//         if (!req.body.house || !req.body.service) {
//             return res.status(houseServiceMessage.error.fieldMissing.http).send(houseServiceMessage.error.fieldMissing);
//         }
//         const {id} = req.params;
//
//         const houseService = await HouseService.updateOne({_id: id}, {$set: req.body});
//
//         if (houseService.modifiedCount) {
//             return res.status(houseServiceMessage.success.houseServiceUpdated.http).send(houseServiceMessage.success.houseServiceUpdated);
//         }
//
//         return res.status(houseServiceMessage.error.houseServiceDontExist.http).send(houseServiceMessage.error.houseServiceDontExist);
//     } catch (err) {
//         console.error('Error during update', err);
//
//         return res.status(500).send({error: 'Internal server error'});
//     }
// };
//
//
// /**
//  exports.softDelete = async (req, res) => {
//     const { id } = req.params;
//
//     try {
//         const house = await House.updateOne({_id: id}, {active: false});
//
//         if(house.modifiedCount) {
//             return res.status(houseMessage.success.houseDeleted.http).send(houseMessage.success.houseDeleted);
//         }
//
//         return res.status(houseMessage.error.houseDontExist.http).send(houseMessage.error.houseDontExist);
//     } catch (err) {
//         console.error('Error during process', err);
//
//         return res.status(500).send({error: 'Internal server error'});
//     }
// };*/
//
// /**
//  * Delete
//  *
//  * @param req
//  * @param res
//  * @returns {Promise<*>}
//  */
// exports.delete = async (req, res) => {
//     const {id} = req.params;
//
//     try {
//         const result = await HouseService.findByIdAndDelete(id);
//         if (!result) {
//             return res.status(houseServiceMessage.error.houseServiceDontExist.http).send(houseServiceMessage.error.houseServiceDontExist);
//         }
//
//         return res.status(houseServiceMessage.success.houseServiceDeleted.http).send(houseServiceMessage.success.houseServiceDeleted);
//     } catch (err) {
//         console.error('Error during process', err);
//
//         return res.status(500).send({error: 'Internal server error'});
//     }
// };
