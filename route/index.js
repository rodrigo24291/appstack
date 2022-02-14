const express=require('express')
const route=express.Router()
const proyectocontroller=require('../controller/proyectoController')
const tareacontrolador=require('../controller/tareacontroller')
const usuariocontroller=require('../controller/usuarioController')
const authecontroller=require('../controller/authController')
const {body}=require('express-validator/check')
module.exports=function(){


    route.get('/',
    authecontroller.autenticar,
    proyectocontroller.proyectoHome),
    route.get('/nuevo-proyecto',authecontroller.autenticar,proyectocontroller.proyectoNuevo),
    route.get('/proyecto/:url',authecontroller.autenticar,proyectocontroller.proyectoid),
    route.post('/nuevo-proyecto',authecontroller.autenticar,
    body('nombre').not().isEmpty().trim().escape(),
    proyectocontroller.proyectoNuevopost),
    route.get('/proyectoeditar/:id',authecontroller.autenticar,proyectocontroller.proyectoeditar),
    route.post('/proyecto-actualizar/:id',authecontroller.autenticar,
    body('nombre').not().isEmpty().trim().escape(),
    proyectocontroller.proyectoatualizar),
    route.get('/proyectoeliminar/:id',authecontroller.autenticar,proyectocontroller.proyectoeliminar),
    route.post('/tareacreate/:url',authecontroller.autenticar,tareacontrolador.nuevatareacontroller),
    route.get('/crearcuenta',
    usuariocontroller.crearcuentaController),
    route.post('/crearusuario',usuariocontroller.crearusuariocontroller),
    route.get('/iniciarsesion',usuariocontroller.iniciarsesion),
    route.post('/autentic',authecontroller.auteticarusuario),
    route.get('/cerrarsesion',authecontroller.autenticar,authecontroller.cerrarcesion),
    route.get('/eliminartarea/:id',authecontroller.autenticar,tareacontrolador.eliminartarea)


return route
}

