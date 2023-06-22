const {DataTypes, Model} = require('sequelize');
/**
 * @author João Ponte
 * @swagger
 * tags:
 *   - name: UserTypes
 *     description: Operações relacionadas com tipos de utilizadores
 *
 * definitions:
 *   UserType:
 *     type: object
 *     required:
 *       - id
 *       - name
 *     properties:
 *       id:
 *         type: number
 *         description: Identificador único do tipo de utilizador
 *       name:
 *         type: string
 *         description: Nome do tipo de utilizador
 */

class UserType extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: DataTypes.STRING,
                required: true,
                unique: true
            }
        }, {sequelize})
    }

    static associate(models) {
        this.hasMany(models.User, { foreignKey: 'user_type_id', onUpdate: 'CASCADE', onDelete: 'SET NULL'});
    }
}

module.exports = UserType;