const { DataTypes, Model } = require('sequelize');
/**
 * @author Pedro Martins
 * @swagger
 * tags:
 *   - name: ReservationStates
 *     description: Estados da reserva
 *
 * definitions:
 *   ReservationState:
 *     type: object
 *     required:
 *       - state
 * 
 *     properties:
 *       state:
 *         type: string
 *         description: Estado da reserva
 *         example: Completo
 */
class ReservationState extends Model {
    static init(sequelize) {
        return super.init({
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                unique: true,
                autoIncrement: true,
            }, 
            state: {
                type: DataTypes.STRING,
                required: true
            }
        }, {sequelize})
    }

    static associate(models) {
        
        this.hasMany(models.Reservation, { foreignKey: 'state_id' }); 
      
    }
}

module.exports = ReservationState;