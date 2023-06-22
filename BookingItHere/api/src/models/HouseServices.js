const { DataTypes, Model } = require('sequelize');
/**
 * @author Luís Anjo
 * @swagger
 * tags:
 *   - name: HouseServices
 *     description: Operações de serviços relacionadas a alojamentos
 *
 * definitions:
 *   HouseServices:
 *     type: object
 *     required:
 *       - house
 *       - service
 * 
 *     properties:
 *       house:
 *         type: integer
 *         description: ID do alojamento
 *         example: 1
 *       service:
 *         type: integer
 *         description: ID do serviço
 *         example: 1
 *       price:
 *         type: integer
 *         description: Preço do serviço
 *         example: 123456
 */
class HouseServices extends Model {
    static init(sequelize){
     return super.init({
        id:{
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        }, 
        house_id: {
            type: DataTypes.INTEGER,

        },
        service_id: {
            type: DataTypes.INTEGER,

        },
        price:{
            type: DataTypes.FLOAT,
            required: true
        }
        },{ sequelize })
    }
}

module.exports = HouseServices;