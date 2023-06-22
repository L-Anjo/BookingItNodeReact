const { DataTypes, Model } = require('sequelize');
/**
 * @swagger
 * tags:
 *   - name: PaymentStates
 *     description: Estados do pagamento
 *
 * definitions:
 *   PaymentState:
 *     type: object
 *     required:
 *       - state
 * 
 *     properties:
 *       state:
 *         type: string
 *         description: Estado do pagamento
 *         example: Completo
 */
class PaymentState extends Model {
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
        
        this.hasMany(models.Payment, { foreignKey: 'state_id' }); 
      
    }
}

module.exports = PaymentState;