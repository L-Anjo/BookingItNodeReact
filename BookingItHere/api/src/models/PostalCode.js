const { DataTypes, Model } = require('sequelize');
/**
 * @author Luís Anjo
 * @swagger
 * tags:
 *   - name: PostalCodes
 *     description: Operações relacionadas a codigos postais
 *
 * definitions:
 *   PostalCode:
 *     type: object
 *     required:
 *       - postalCode
 *       - concelho
 *       - district
 * 
 *     properties:
 *       postalCode:
 *         type: number
 *         format: int64
 *         description: Código Postal
 *       concelho:
 *         type: string
 *         description: Nome do concelho
 *       district:
 *         type: string
 *         description: Nome do distrito
 */
class PostalCode extends Model {
    
    static init(sequelize){
      super.init({
            postalCode: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                unique: true
            },
            concelho: {
                type: DataTypes.STRING,
                required: true
            },
            district: {
                type: DataTypes.STRING,
                required: true
            }
        },{ sequelize })
    }

    static associate(models) {
        this.hasMany(models.House, { foreignKey: 'postalCode' ,onUpdate: 'CASCADE',onDelete: 'SET NULL'});
      }
}


module.exports = PostalCode;