const tareacontroller=require('../models/Tarea')

const proyect = require('../models/proyectos')
exports.nuevatareacontroller=async(req,res)=>{
    const nombre=req.body.nombre
    const estado=0
    
    console.log(req.params.url)
const proyectos=await proyect.findOne({
    where:{
        url:req.params.url
    }
})
const proyectoId=proyectos.id
await tareacontroller.create({
nombre,estado,proyectoId

})
   res.redirect(`/proyecto/${req.params.url}`) 
}

exports.eliminartarea=async (req,res)=>{
    const id=req.params.id
    await tareacontroller.destroy({
        where:{
            id:req.params.id
        }
    })

    res.redirect('/')   
}