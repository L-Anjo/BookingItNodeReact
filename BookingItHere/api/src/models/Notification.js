const {DataTypes, Model} = require('sequelize');

/**
 * @author Luís Anjo
 * @swagger
 * tags:
 *   - name: Notification
 *     description: Operações relacionadas a codigos postais
 *
 * definitions:
 *   Notification:
 *     type: object
 *     required:
 *       - msg
 *       - send
 *       - userId
 *
 *     properties:
 *       msg:
 *         type: string
 *         format: int64
 *         description: Mensagem do Sistema
 *       send:
 *         type: Number
 *         description: 0
 *       userId:
 *         type: Number
 *         description: 1
 */
class Notification extends Model {

    static init(sequelize) {
        super.init({
            msg: {
                type: DataTypes.STRING,
                required: true
            },
            send: {
                type: DataTypes.TINYINT,
                required: true
            },
            user_id: {
                type: DataTypes.INTEGER
            }
        }, {sequelize})
    }

    static associate(models) {
        this.belongsTo(models.User, {foreignKey: 'user_id', onUpdate: 'CASCADE', onDelete: 'SET NULL'});
    }
}


module.exports = Notification;