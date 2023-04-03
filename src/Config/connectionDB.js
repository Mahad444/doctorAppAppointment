// requiring dotenv file
require('dotenv').config();
const colors = require('colors');

// connecting mysql with sequlizer 
const {Sequelize} = require('sequelize');

// getting database name from .env file
const DB_NAME = process.env.DB_NAME;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;

const sequelize = new Sequelize (DB_NAME,DB_USERNAME,DB_PASSWORD,{
    host: DB_HOST,
    dialect: 'mysql'

});

// trying to connect with database

let ConnectionDB =async () => {
    try{
        sequelize.authenticate();  
        console.log('Connection has been established successfully.'.bgGreen.white);
    }
    catch(error){
        console.error('Unable to connect to the database:'.bgRed.white, error);
    }
    
    
}

module.exports = ConnectionDB;
