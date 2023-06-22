const { DataTypes, Model } = require('sequelize');
/**
 * @author Pedro Martins
 * @swagger
 * tags:
 *   - name: Feedbacks
 *     description: Feedbacks relacionados às reservas
 *
 * definitions:
 *   Feedback:
 *     type: object
 *     required:
 *       - reservation
 *       - comment
 *       - classification
 * 
 *     properties:
 *       reservation:
 *         type: integer
 *         description: Numero da reserva
 *         example: 1
 *       comment:
 *         type: string
 *         description: Comentário
 *         example: Muito bom!
 *       classification:
 *         type: integer
 *         description: Classificação
 *         example: 5
 */
class Feedback extends Model {
    
    static init(sequelize){
       return super.init({
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            reservation:{
                type: DataTypes.INTEGER,
                required: true
            },
            comment:{
                type: DataTypes.STRING,
                required: true
            },
            classification: {
                type: DataTypes.INTEGER,
                required: true
            }
        },{ sequelize })
    }

    static associate(models) {
        this.belongsTo(models.Reservation, { foreignKey: 'reservation'});
      }

}

module.exports = Feedback;