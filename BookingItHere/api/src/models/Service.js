const { DataTypes, Model } = require('sequelize');
/**
 * @swagger
 * tags:
 *   - name: Services
 *     description: Operações relacionadas aos serviços
 *
 * definitions:
 *   Service:
 *     type: object
 *     required:
 *       - name
 * 
 *     properties:
 *       name:
 *         type: string
 *         description: Nome do serviço
 *         example: Limpeza
 *       state:
 *          type: integer
 *          description: Estado do serviço
 *          example: 1
 */
class Service extends Model {
    
    static init(sequelize){
     return super.init({
        name:{
            type: DataTypes.STRING,
            unique: true
        },
        state:{
            type: DataTypes.TINYINT,
            required: true
        },
        },{ sequelize })
    }

    static associate(models) {
        this.belongsToMany(models.House, { through: 'HouseServices' });
        this.belongsToMany(models.Reservation, { through: 'ReservationServices' });
      }
}

module.exports = Service;