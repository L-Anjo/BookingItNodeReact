const { DataTypes, Model } = require('sequelize');
/**
 * @swagger
 * tags:
 *   - name: Announcements
 *     description: Operações relacionadas a anuncios
 *
 * definitions:
 *   Announcement:
 *     type: object
 *     required:
 *       - house
 *       - priceClick
 *       - numbClicks
 *       - state
 *       - end_date
 * 
 *     properties:
 *       house_id:
 *         type: integer
 *         description: alojamento do anuncio
 *         example: 1
 *       priceClick:
 *         type: float
 *         description: Preço por click no anuncio
 *         example: 0,30
 *       numbClicks:
 *         type: integer
 *         description: Numero de clicks efetuados
 *         example: 80
 *       state:
 *         type: integer
 *         description: Estado do anuncio
 *         example: 0
 *       end_date:
 *         type: date
 *         description: Data final do anuncio
 *         example: 2023-08-25       
 */
class Announcement extends Model {
    
    static init(sequelize){
       return super.init({
        
            id:{
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            },
            priceClick:{
                type: DataTypes.FLOAT,
                required: true
            },
            numbClicks:{
                type: DataTypes.INTEGER,
                required: true
            },
            state:{
                type: DataTypes.TINYINT,
                required: true
            },
            end_date: {
                type: DataTypes.DATE,
                required: true
            }
        },{ sequelize })
    }

    static associate(models) {
        this.belongsTo(models.House, { foreignKey: 'house_id'});
        this.hasMany(models.AnnouncementPayment, { foreignKey: 'announcement'});
      }
}

// @author Diogo
Announcement.calculateTotalValue = async function (priceClick, numbClicks, end_date) {
    // Obter valor das variaveis
    const pricePerClick = priceClick;
    const numberOfClicks = numbClicks;

    // Calcular o número de dias de anuncio
    const todayDate = new Date();
    const endDate = new Date(end_date);
    const days = Math.floor((endDate - todayDate) / (1000 * 60 * 60 * 24));

    // Calcular o valor total do anuncio
    const total = (numberOfClicks * pricePerClick) * days;

    return total;
}

module.exports = Announcement;