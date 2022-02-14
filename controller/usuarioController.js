const usuario=require('../models/Usuarios')

exports.crearcuentaController=(req,res)=>{

    res.render('crearcuenta')
}

exports.crearusuariocontroller=async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    console.log(email)
let errore=[]
try {
await usuario.create({email:email,password:password})
res.redirect('/')    
} catch (error) {
    res.render('crearcuenta',{
        err:error.errors,
        email,
        password
    })
}
}

exports.iniciarsesion=(req,res)=>{
    console.log(res.locals.mensages,'2')
    res.render('inicisiarsesion',{
        error:res.locals.mensages
    })
}


