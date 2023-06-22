const {DataTypes, Model} = require('sequelize');

/**
 * @author Pedro Martins
 * @swagger
 * tags:
 *   - name: Reservations
 *     description: Operações relacionadas as reservas
 *
 * definitions:
 *   Reservation:
 *     type: object
 *     required:
 *       - init_date
 *       - end_date
 *       - user_id
 *       - house_id
 *       - state_id
 *
 *     properties:
 *       init_date:
 *         type: date
 *         description: Data inicial da reserva
 *         example: Casa T4
 *       end_date:
 *         type: date
 *         description: Data final da reserva
 *         example: 123456
 *       guestsNumber:
 *         type: integer
 *         description: Numero de hospedes da reserva
 *         example: 4
 *       user_id:
 *         type: integer
 *         description: Id do User
 *         example: 1
 *       house_id:
 *         type: integer
 *         description: Id da House
 *         example: 1
 *       state_id:
 *         type: integer
 *         description: Id do State
 *         example: 1
 *       services:
 *         type: array
 *         description: Serviços escolhidos
 *         items:
 *           type: object
 *           properties:
 *           name:
 *             type: string
 *             description: Nome do serviço
 *             example: Limpeza
 */

class Reservation extends Model {

    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            init_date: {
                type: DataTypes.DATE,
                required: true
            },
            end_date: {
                type: DataTypes.DATE,
                required: true
            },
            guestsNumber: {
                type: DataTypes.INTEGER,
                required: true
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
                required: true
            },
            house_id: {
                type: DataTypes.INTEGER,
                required: true,
                allowNull: true
            },
            state_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
                required: true
            }
        }, {sequelize})
    }


    static associate(models) {
        this.belongsTo(models.User, {foreignKey: 'user_id'});
        this.belongsTo(models.ReservationState, {foreignKey: 'state_id'});
        this.belongsTo(models.House, {foreignKey: 'house_id'});
        this.belongsToMany(models.Service, {through: 'ReservationServices'});
        this.hasOne(models.Feedback, {foreignKey: 'reservation'});
        this.hasOne(models.Payment, {foreignKey: 'reservation_id'});
    }
}

// @author Luís Anjo
Reservation.calculateTotalPrice = async function (house_id, init_date, end_date, services, House, Service, HouseServices) {
    // Obter o valor da casa por noite
    const findHouse = await House.findOne({where: {id: house_id}});
    const pricePerNight = findHouse.price;

    // Calcular o número de noites de estadia
    const checkinDate = new Date(init_date);
    const checkoutDate = new Date(end_date);
    const nights = Math.floor((checkoutDate - checkinDate) / (1000 * 60 * 60 * 24));

    // Obter o valor dos serviços selecionados
    let pricee = 0
    if (services) {
        await Promise.all(services.map(async service => {
            let findHService = await Service.findOne({where: {name: service.name}});

            if (findHService !== null) {
                const findHouseService = await HouseServices.findOne({
                    where: {
                        house_id: house_id,
                        service_id: findHService.id
                    }
                });
                if (findHouseService !== null) {
                    pricee += findHouseService.price;
                }
            }
        }))
    }

    // Calcular o valor total da reserva
    const total = pricePerNight * nights + pricee;

    return total;
}


Reservation.validateReservationDate = async function(house_id, init_date, end_date) {
    // Obter todas as reservas do alojamento
    const reservations = await Reservation.findAll({ where: { house_id: house_id } });

    // Obter datas
    const checkinDate = new Date(init_date);
    const checkoutDate = new Date(end_date);

    for (const reservation of reservations) {
        if(reservation.state_id != 2){

        const resCheckinDate = new Date(reservation.init_date);
        const resCheckoutDate = new Date(reservation.end_date);

        // Verificar se as datas se sobrepõem
        if (checkinDate < resCheckoutDate && checkoutDate > resCheckinDate) {
            return false; // As datas se sobrepõem, portanto, não estão disponíveis
        }

        }
    }
    
    return true; // As datas estão disponíveis
};

module.exports = Reservation;