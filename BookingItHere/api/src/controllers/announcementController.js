const Announcement = require("../models/Announcement");
const announcementMessage = require("../messages/announcementMessage");
const House = require("../models/House");
const AnnouncementPayment = require("../models/AnnouncementPayment");
const houseMessage = require("../messages/houseMessage");

/**
 * GET
 * @author Diogo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.getAllAnnouncements = async (req, res) => {
    try {
        const announcement = await Announcement.findAll({
            include: [
                { model: House },
              ],
          });

        if (!announcement) {
            return res.status(announcementMessage.error.announcementDontExist.http).send(announcementMessage.error.announcementDontExist);
        }

        return res.status(200).send({data: announcement});
    } catch (err) {
        console.error('Error during registration', err);

        return res.status(500).send({error: 'Internal server error'});
    }
}

/**
 * GET
 * @author Diogo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.getAnnouncement = async (req, res) => {
    try {
        const {id} = req.params;
        const announcement = await Announcement.findByPk(id,{
            include: [
                { model: House },
            ],
          });
          
        if (!announcement) {
            return res.status(announcementMessage.error.announcementDontExist.http).send(announcementMessage.error.announcementDontExist);
        }

        return res.status(200).send({data: announcement});
    } catch (err) {
        console.error('Error during registration', err);

        return res.status(500).send({error: 'Internal server error'});
    }
}
        
/**
 * Create
 * @author Diogo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.create = async (req, res) => {
    const {
        house_id,
        priceClick,
        numbClicks,
        end_date
    } = req.body;

    try {
        if (!house_id || !numbClicks || !end_date) {
            return res.status(announcementMessage.error.fieldMissing.http).send(announcementMessage.error.fieldMissing);
        }

        
        let findHouse = await Announcement.findOne({where: { house_id: house_id }});
        let findH = await House.findOne({where: {id: house_id}})
        let announcementPayment;

        if(!findH){
            return res.status(houseMessage.error.houseDontExist.http).send(houseMessage.error.houseDontExist);
        }
        if (findHouse) {
            return res.status(announcementMessage.error.announcementAlreadyRegisted.http).send(announcementMessage.error.announcementAlreadyRegisted);
        }

        if(findH.status != 1){
        let announcement = await Announcement.create({
            house_id,
            priceClick,
            numbClicks,
            state: 0,
            end_date
        });

        const valor = await Announcement.calculateTotalValue(priceClick, numbClicks, end_date);

        announcementPayment = await AnnouncementPayment.create({
            announcement : announcement.id,
            status : 0,
            creationDate : new Date(),
            paymentDate : new Date(),
            paymentMethod : "Mbway",
            paymentValue : valor
        })

        announcementMessage.success.announcementApproval.data = {
            id: announcement.id
        };
        }
        else
            return res.status(houseMessage.error.houseDontExist.http).send(houseMessage.error.houseDontExist);

        return res.status(announcementMessage.success.announcementApproval.http).send(announcementMessage.success.announcementApproval);

    } catch (err) {
        console.error('Erro during creation', err);

        return res.status(500).send({error: 'Internal server error'});
    }
};

/**
 * Update
 * @author Diogo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.update = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const announcement = await Announcement.findOne({where: {id: id}})

        if (!announcement) {
            return res.status(announcementMessage.error.announcementDontExist.http).send(announcementMessage.error.announcementDontExist);
        }

        const updatedAnnouncement = await Announcement.update( req.body,
            { where: { id: id } }
        );

        if(parseInt(updatedAnnouncement)) {
            return res.status(announcementMessage.success.announcementUpdated.http).send(announcementMessage.success.announcementUpdated);
        }

        return res.status(announcementMessage.error.announcementDontExist.http).send(announcementMessage.error.announcementDontExist);
    } catch (err) {
        console.error('Error during update', err);
        return res.status(500).send({error: 'Internal server error'});
    }
};

/**
 * Update
 * @author Luís
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.updateClicks = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const announcement = await Announcement.findOne({where: {id: id}})

        if (!announcement) {
            return res.status(announcementMessage.error.announcementDontExist.http).send(announcementMessage.error.announcementDontExist);
        }

        const currentClicks = announcement.numbClicks;
        const updatedClicks = currentClicks - 1;
        if(updatedClicks < 0){
            const updatedAnnouncement = await Announcement.update( {
                    state: 0,
                    numbClicks: updatedClicks
                },
                { where: { id: id } }
            );
        }

        const updatedAnnouncement = await Announcement.update( {numbClicks: updatedClicks},
            { where: { id: id } }
        );

        if(parseInt(updatedAnnouncement)) {
            return res.status(announcementMessage.success.announcementUpdated.http).send(announcementMessage.success.announcementUpdated);
        }

        return res.status(announcementMessage.error.announcementDontExist.http).send(announcementMessage.error.announcementDontExist);
    } catch (err) {
        console.error('Error during update', err);
        return res.status(500).send({error: 'Internal server error'});
    }
};

/**
 * Search
 * @author Diogo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.search = async (req, res) => {
    try {

        let searchFields;
        searchFields = utils.allowFieldsObject(req.body, [
            'house_id',
            'priceClick',
            'totalMonth',
            'numbClicks',
            'state',
            'end_date'
        ]);

        for (let propName in searchFields) {
            if (typeof searchFields[propName] === 'string') {
                searchFields[propName] = {$regex: new RegExp(`${searchFields[propName]}.*`, 'i')};
            }
        }

        const result = await Announcement.find({
            $or:
                [
                    searchFields
                ]
        });

        if (!result) {
            return res.status(announcementMessage.error.announcementDontExist.http).send(announcementMessage.error.announcementDontExist);
        }
        return res.status(200).send(result);
    } catch (err) {
        console.error('Error during process', err);

        return res.status(500).send({error: 'Internal server error'});
    }
}

/**
 * Hard Delete
 * @author Diogo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.hardDelete = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const result = await Announcement.destroy({where: { id: id }});
        if (!result) {
            return res.status(announcementMessage.error.announcementDontExist.http).send(announcementMessage.error.announcementDontExist);
        }

        return res.status(announcementMessage.success.announcementDeleted.http).send(announcementMessage.success.announcementDeleted);
    } catch (err) {
        console.error('Error during process', err);

        return res.status(500).send({error: 'Internal server error'});
    }
};

/**
 * Update
 * @author Diogo
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.updateStateA = async (req, res) => {
    try {
        const announcement = await Announcement.findOne({where: {id: parseInt(req.params.id)}});
        //let newState = req.params.state ?? 1;
        if (!announcement) {
            return res.status(announcementMessage.error.announcementDontExist.http).send(announcementMessage.error.announcementDontExist);
        }

        //const houseStatus = await StatusHouse.findByPk(statusId)
        //if (!houseStatus) {
        //    return res.status(houseMessage.error.houseStatusDontExist.http).send(houseMessage.error.houseStatusDontExist);
        //}

        const updatedAnnouncement = await announcement.update({state: 1});

        if (updatedAnnouncement) {
            return res.status(announcementMessage.success.announcementUpdated.http).send(announcementMessage.success.announcementUpdated);
        }

        return res.status(announcementMessage.error.announcementDontExist.http).send(announcementMessage.error.announcementDontExist);
    } catch (err) {
        console.error('Error during update', err);
        return res.status(500).send({error: 'Internal server error'});
    }
};
