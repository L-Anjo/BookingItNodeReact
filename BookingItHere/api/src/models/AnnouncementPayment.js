const { DataTypes, Model } = require('sequelize');
/**
 * @author Pedro Martins
 * @swagger
 * tags:
 *   - name: AnnouncementPayments
 *     description: Operações relacionadas aos pagamentos dos anuncios
 *
 * definitions:
 *   AnnouncementPayment:
 *     type: object
 *     required:
 *       - announcement
 *       - status
 *       - creationDate
 *       - paymentDate
 *       - paymentMethod
 *       - paymentValue
 * 
 *     properties:
 *       announcement:
 *         type: integer
 *         description: ID do anuncio
 *         example: 1
 *       status:
 *         type: integer
 *         description: Estado do pagamento
 *         example: 123456
 *       creationDate:
 *         type: date
 *         description: Data da criação do pagamento
 *         example: 2023-04-25
 *       paymentDate:
 *         type: date
 *         description: Data do pagamento
 *         example: 2023-04-25
 *       paymentMethod:
 *         type: string
 *         description: Metodo do pagamento
 *         example: 1
 *       paymentValue:
 *         type: float
 *         description: Valor do pagamento
 *         example: 200.5
 */

class AnnouncementPayment extends Model {
    
    static init(sequelize){
        super.init({
            id:{
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            }, 
            announcement:{
                type: DataTypes.BIGINT,
                required: true,
                allowNull: true
            },
            status:{
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
                required: true
            }
        },{ sequelize })
    }

    static associate(models) {
        this.belongsTo(models.Announcement, { foreignKey: 'announcement' }); 
    }
}


module.exports = AnnouncementPayment;