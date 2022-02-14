const express=require('express');
const app=express()
const path=require('path')
const port=3000;
const route=require('./route')
const body=require('body-parser')
const sequelize=require('./db/db')
const passport=require('./db/passport')
const flash=require('connect-flash')
const session=require('express-session')
const cookie=require('cookie-parser')
require('dotenv').config({path:'./variables.env'})


app.set('view engine','pug')
app.set('views',path.join(__dirname,'./view'))
require('./models/Usuarios')
require('./models/Tarea')
require('./models/proyectos')
try {
 sequelize.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
app.use(express.static('public'))
app.use(body.urlencoded({extended:true}))
app.use(flash())
app.use(cookie())
app.use(session({
  secret:'we',
  resave:false,
  saveUninitialized:false
}))

app.use(passport.initialize())
app.use(passport.session())
app.use((req,res,next)=>{
  console.log(req.user)
res.locals.mensages= req.flash();
res.locals.usuario={...req.user} || null
next();
})
app.use('/',route())
app.listen(port,()=>{
    console.log(port)
})


