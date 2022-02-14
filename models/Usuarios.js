const sequelize=require('sequelize')
const db=require('../db/db')
const proyecto=require('../models/proyectos')
const bcrypt=require('bcrypt-nodejs')


const usuario=db.define('Usuarios',{

    id:{
        type:sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    email:{
        type:sequelize.STRING(60),
        allowNull:false,
        validate:{
            isEmail:{
                msg:"debes insertar un email"
            
            },
            notEmpty:{
                msg:'No puede ir vacio'
            }
        },
        unique:{
            args:true,
            msg:"Usuario ya registrado"
        }
    },
    password:{
        type:sequelize.STRING(60),
        allowNull:false,
        validate:{
            notEmpty:{
                msg:'Pasword No puede ir vacio'
            }
        }
    }
},
{
    hooks:{
        beforeCreate(user) {
            user.password=bcrypt.hashSync(user.password,bcrypt.genSaltSync(10))            
        },
    }
}
)
usuario.prototype.verificar=function(pasword){
return bcrypt.compareSync(pasword,this.password)
}
usuario.hasMany(proyecto);

module.exports=usuario;