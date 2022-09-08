const {Sequelize,Model,DataTypes}= require('sequelize')


let dbConfig = {
    db_name: 'state',
    db_user: 'root',
    db_pass: 'Gavag@4532',
    cont_type: 'mysql',
    port: '3306',
    host: 'localhost'
}

const SequelizeTZ = new Sequelize(dbConfig.db_name, dbConfig.db_user,dbConfig.db_pass,{
    host: dbConfig.host,
    dialect: dbConfig.cont_type,
    port: dbConfig.port
})

const connection = {};

connection.Sequelize = Sequelize;
connection.SequelizeTZ = SequelizeTZ;
connection.Model = Model;
connection.DataTypes = DataTypes;

module.exports =connection;

 
