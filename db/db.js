const { Sequelize } = require('sequelize');

require('dotenv').config({path:'variables.env'})
const sequelize = new Sequelize(
  
  process.env.BD_NOMBRE, 
  process.env.BD_USER,
  process.env.BD_PASS, {
    host: 'localhost',
    dialect: 'mysql'
  });

  module.exports= sequelize