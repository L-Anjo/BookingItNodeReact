const { DataTypes, Model } = require('sequelize');
/**
 * @author Luís Anjo
 * @swagger
 * tags:
 *   - name: StatusHouses
 *     description: Operações relacionadas aos estado dos alojamentos
 *
 * definitions:
 *   StatusHouse:
 *     type: object
 *     required:
 *       - status
 *     properties:
 *       status:
 *         type: string
 *         description: Estado do Alojamento
 */
class StatusHouse extends Model {
    static init(sequelize){
      super.init({
            status: {
                type: DataTypes.STRING,
                required: true
            }
        },{ sequelize })
    }

    static associate(models) {
        this.hasMany(models.House, { foreignKey: 'status' , onUpdate: 'CASCADE', onDelete: 'SET NULL'});
    }
}

module.exports = StatusHouse;