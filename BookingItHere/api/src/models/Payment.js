const { DataTypes, Model } = require('sequelize');
/**
 * @swagger
 * tags:
 *   - name: Payments
 *     description: Operações relacionadas a pagamentos
 *
 * definitions:
 *   Payment:
 *     type: object
 *     required:
 *       - reservation_id
 *       - status
 *       - creationDate
 *       - paymentDate
 *       - paymentMethod
 *       - paymentValue
 * 
 *     properties:
 *       reservation_id:
 *         type: integer
 *         description: reserva do pagamento
 *         example: 1
 *       state_id:
 *         type: integer
 *         description: id do estado do pagamento 
 *         example: 1
 *       creationDate:
 *         type: date
 *         description: Data de criação do pagamento 
 *         example: "2023-05-25"
 *       paymentDate:
 *         type: date
 *         description: Data do pagamento 
 *         example: "2023-05-25"
 *       paymentMethod:
 *         type: string
 *         description: Metodo do pagamento
 *         example: MBway
 *       paymentValue:
 *         type: float
 *         description: Valor do Pagamento efetuado
 *         example: 210.50
 *       
 */
class Payment extends Model {
    
    static init(sequelize){
       return super.init({
            id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            }, 
            reservation_id:{
                type: DataTypes.INTEGER,
                required: true
            },
            state_id:{
                type: DataTypes.INTEGER,
                required: true
            },
            creationDate: {
                type: DataTypes.DATE,
                required: true
            },
            paymentDate:{
                type: DataTypes.DATE,
                required: true
            },
            paymentMethod: {
                type: DataTypes.STRING,
                required: true
            },
            paymentValue: {
                type: DataTypes.FLOAT,
            }
        },{ sequelize })
    }

    static associate(models) {
        
        this.belongsTo(models.PaymentState, { foreignKey: 'state_id' }); 
        this.belongsTo(models.Reservation, { foreignKey: 'reservation_id' });
      }

}

module.exports = Payment;