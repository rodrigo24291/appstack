const proyect = require('../models/proyectos')
const tareas=require('../models/Tarea')
exports.proyectoHome=async(req,res)=>{
 const UsuarioId=res.locals.usuario.id
    const proyectos=await proyect.findAll({
        where:{
            UsuarioId
        }
    })
    console.log(proyectos)
    res.render('index',{
        
        proyecta:proyectos
    })
}

exports.proyectoNuevo=async (req,res)=>{
     const UsuarioId=res.locals.usuario.id;
    const proyectos=await proyect.findAll({
        where:{
            UsuarioId
        }
    })
    res.render('nuevoproyecto',{
        proyecta:proyectos
    }
    
    )
}


exports.proyectoNuevopost=async (req,res)=>{
const {nombre}=req.body
const UsuarioId=res.locals.usuario.id;  
console.log(UsuarioId,12)  
   const proyecto=await proyect.create({nombre,UsuarioId})
   res.redirect('/')
}

exports.proyectoid=async(req,res,next)=>{
   
    
    const findone= await proyect.findOne({
        where:{
            url:req.params.url
        }
    })
    
    if(!findone)return next();
    const proyectos=await proyect.findAll()
   
   const ta=await tareas.findAll({
       where:{
           proyectoId:findone.id,

       }
   })
    res.render('proyectoid',{
        url:findone,
        proyecta:proyectos,
        ta
    })
    next()
}


exports.proyectoeditar=async(req,res,next)=>{

    const proyectos=await proyect.findAll()
    
const id=await proyect.findOne({
    where:{
        id:req.params.id
    }
})
    res.render('editarproyecto',{
        id,
        proyecta:proyectos,
        

    })
}

exports.proyectoatualizar=async (req,res)=>{
    const nombre=req.body.nombre
    console.log(nombre)
    console.log(req.params.id)
 await proyect.update({nombre:nombre},
       { where:{
            id:req.params.id
        }}
    )
res.redirect('/')
}

exports.proyectoeliminar=async (req,res)=>{
    const proyectos=await proyect.findAll()
    console.log('hola')
    const borrar=await proyect.destroy({
        where:{
            id:req.params.id
        }
    })
    res.redirect('/')
}
