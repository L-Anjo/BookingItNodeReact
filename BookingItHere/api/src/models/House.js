const {DataTypes, Model} = require('sequelize');

/**
 * @author Luís Anjo
 * @swagger
 * tags:
 *   - name: Houses
 *     description: Operações relacionadas a alojamentos
 *
 * definitions:
 *   House:
 *     type: object
 *     required:
 *       - name
 *       - doorNumber
 *       - floorNumber
 *       - price
 *       - guestsNumber
 *       - postalCode
 *       - road
 *       - propertyAssessment
 *       - concelho
 *       - district
 *
 *     properties:
 *       name:
 *         type: string
 *         description: Nome do alojamento
 *         example: Casa T4
 *       doorNumber:
 *         type: integer
 *         description: Numero da Porta
 *         example: 123456
 *       floorNumber:
 *         type: integer
 *         description: andar do alojamento
 *         example: 1
 *       price:
 *         type: integer
 *         description: Preço Alojamento
 *         example: 60
 *       guestsNumber:
 *         type: integer
 *         description: Numero maximo Pessoas
 *         example: 3
 *       status:
 *         type: integer
 *         description: id do estado
 *         example: 3
 *       postalCode:
 *         type: integer
 *         description: id do codigo postal
 *         example: 4751
 *       road:
 *         type: string
 *         description: Rua do alojamento
 *         example: rua da escola
 *       propertyAssessment:
 *         type: string
 *         description: Artigo Matricial do Alojamento
 *         example: 23X
 *       concelho:
 *         type: string
 *         description: Concelho do Alojamento
 *         example: barcelos
 *       district:
 *         type: string
 *         description: Distrito do Alojamento
 *         example: braga
 *       services:
 *         type: array
 *         description: Serviços oferecidos pelo alojamento
 *         items:
 *           type: object
 *           properties:
 *           name:
 *             type: string
 *             description: Nome do serviço
 *             example: Limpeza
 *           price:
 *             type: integer
 *             description: Preço do serviço
 *             example: 10
 */
class House extends Model {

    static init(sequelize) {
        super.init({
            name: {
                type: DataTypes.STRING,
                required: true
            },
            doorNumber: {
                type: DataTypes.INTEGER,
                required: true
            },
            floorNumber: {
                type: DataTypes.INTEGER,
                required: true
            },
            price: {
                type: DataTypes.FLOAT,
                required: true
            },
            guestsNumber: {
                type: DataTypes.INTEGER,
                required: true
            },
            status: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            postalCode: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            user_id: {
                type: DataTypes.INTEGER
            },
            road: {
                type: DataTypes.STRING,
                required: true
            },
            propertyAssessment: {
                type: DataTypes.STRING,
                required: true
            },
            imageUrls: {
                type: DataTypes.STRING, //Acaba por ser um "array" de imagens
                allowNull: true,
                get() {
                    const imageUrls = this.getDataValue('imageUrls');
                    return imageUrls ? imageUrls.split(',') : [];
                },
                set(value) {
                    const imageUrls = value ? value.join(',') : null;
                    this.setDataValue('imageUrls', imageUrls);
                },
            }
        }, {sequelize})
    }


    static associate(models) {
        this.belongsTo(models.PostalCode, {foreignKey: 'postalCode'});
        this.belongsTo(models.StatusHouse, {foreignKey: 'status'});
        this.belongsTo(models.User, {foreignKey: 'userId'});
        this.belongsToMany(models.Service, {through: 'HouseServices'});
        this.hasMany(models.Announcement, {foreignKey: 'house_id'});
        this.hasMany(models.Reservation, {foreignKey: 'house_id'});
    }
}


module.exports = House;