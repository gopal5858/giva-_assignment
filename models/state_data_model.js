const dbConfig = require('../config/config');
const Model = dbConfig.Sequelize.Model;
const sequelize = dbConfig.SequelizeTZ

const Op = dbConfig.Sequelize.Op;

class State_Model extends Model {

}
 
State_Model.init({
    // id: {
    //     type: dbConfig.Sequelize.INTEGER,
    //     pri
    // },
    date:{
        type: dbConfig.Sequelize.DATE,
        allowNull:false
    },
    state: {
        type: dbConfig.Sequelize.STRING,
    },
    fips: {
        type: dbConfig.Sequelize.INTEGER,
    },
    cases: {
        type: dbConfig.Sequelize.INTEGER,
    },
    deaths: {
        type: dbConfig.Sequelize.INTEGER,
    }
},{
    sequelize,
    timestamp:false,
    modelName:"covid_state",
    freezeTableName:true
});

module.exports = State_Model;