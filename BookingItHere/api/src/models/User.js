const { DataTypes, Model } = require('sequelize');
const bcrypt = require("bcrypt");
/**
 * @author João Ponte
 * @swagger
 * tags:
 *   - name: Users
 *     description: Operações relacionadas a utilizadores
 *
 * definitions:
 *   User:
 *     type: object
 *     required:
 *       - id
 *       - name
 *       - email
 *       - password
 *       - user_type_id
 *     properties:
 *       id:
 *         type: integer
 *         description: Identificador único do utilizador
 *       name:
 *         type: string
 *         description: Nome do utilizador
 *       email:
 *         type: string
 *         description: Endereço de e-mail do utilizador
 *       password:
 *         type: string
 *         description: Password de acesso
 *       phone:
 *         type: string
 *         description: Nº de Telemovél
 *       token:
 *         type: string
 *         description: Token de autenticação
 *       status:
 *         type: integer
 *         description: Status do user
 *       user_type_id:
 *         type: integer
 *         description: Tipo de utilizador
 */
class User extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: {
                type: DataTypes.STRING,
                required: true,
                unique: true,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                length: 150,
                required: true
            },
            phone: DataTypes.STRING,
            token: DataTypes.STRING,
            status: DataTypes.TINYINT
        },{ sequelize })
    }

    async comparePassword(password){
        return await bcrypt.compare(password, this.password);
    }

    static associate(models) {
        this.belongsTo(models.UserType, { foreignKey: 'user_type_id', as: 'usertype'});
        this.hasMany(models.House, { foreignKey: 'userId' }); 
        this.hasMany(models.Reservation, { foreignKey: 'user_id' }); 
        this.hasMany(models.Notification, { foreignKey: 'user_id' });
    }
}


module.exports = User;