const StateModel = require('../models/state_data_model');
const dbConfig = require('../config/config');
const Model = dbConfig.Sequelize.Model;
const sequelize = dbConfig.SequelizeTZ

const Op = dbConfig.Sequelize.Op;

const list = async (req,res) => {
    try {
        // console.log(req.query);
        for(key in req.query){
            if(key == "state"){
                let result = await StateModel.findAll({
                    attributes:["state"],
                    where:{
                        // deaths:0,
                        // state:'Washington',
                        state:{[Op.like]:`%${req.query[key]}%`}
                    }
                });
                res.status(200).json(result);
            }
            if(key == "select"){
                let result = await StateModel.findAll({
                    attributes:["date","state","fips","cases","deaths"],
                    where:{
                        // deaths:0,
                        // state:'Washington',
                        state: req.query[key]
                    }
                });
                res.status(200).json(result);
            }
            
        }

    } catch (e) {
        res.status(400).json(e);
    }
}

module.exports ={
    list
}