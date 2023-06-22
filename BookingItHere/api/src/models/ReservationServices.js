const { DataTypes, Model } = require('sequelize');
/**
 * @author Pedro Martins
 * @swagger
 * tags:
 *   - name: ReservationServices
 *     description: Estados da reserva
 *
 * definitions:
 *   ReservationService:
 *     type: object
 *     required:
 *       - reservation
 *       - service
 * 
 *     properties:
 *       reservation:
 *         type: string
 *         description: Reserva
 *         example: 1
 *       service:
 *         type: integer
 *         description: ID do serviço
 *         example: 1
 */
class ReservationServices extends Model {
    static init(sequelize) {
        return super.init({
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                unique: true,
                autoIncrement: true,
            }, 
            reservation_id: {
                type: DataTypes.INTEGER
            },
            service_id: {
                type: DataTypes.INTEGER
            },
            price:{
                type: DataTypes.FLOAT,
                required: true
            }
        }, {sequelize})
    }

}

module.exports = ReservationServices;