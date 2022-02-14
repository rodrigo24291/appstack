const { Sequelize } = require('sequelize')

const db=require('../db/db')
const slug=require('slug')
const id=require('shortid')

const proyect=db.define('proyectos',{

    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:Sequelize.STRING,
    url:Sequelize.STRING

},{
    hooks:{

        beforeCreate(proyecto) {
            const url=slug(proyecto.nombre).toLowerCase()
                proyecto.url=`${url}-${id.generate()}`
        }
    }

})

module.exports= proyect