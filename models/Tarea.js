const db=require('../db/db');
const sequilize=require('sequelize');
const proyect = require('../models/proyectos');
const Tareas=db.define('Tareas',{

    id:{
        autoIncrement:true,
        primaryKey:true,
        type:sequilize.INTEGER
    },

    nombre:sequilize.STRING,
    estado:sequilize.INTEGER
},
)
Tareas.belongsTo(proyect);
module.exports=Tareas;
