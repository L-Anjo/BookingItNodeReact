const { sequelize } = require('../../src/database');

/**
 * Truncate all models
 *
 * @author João Ponte
 */
module.exports = () => {
    Promise.all(
        Object.keys(sequelize.models).map(key => {
            return sequelize.models[key].destroy({
                truncate: true,
                force: true,
                cascade: true
            })
        })
    );
}