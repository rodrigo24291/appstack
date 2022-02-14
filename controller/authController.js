const passport = require('passport')

exports.auteticarusuario=passport.authenticate('local',{
    successRedirect:'/',
    failureRedirect:'/iniciarsesion',
    failureFlash:true,
    badRequestMessage:'ambos son obligatorios'

})

exports.autenticar=(req,res,next)=>{
    if(req.isAuthenticated()){
        return next()
    }
    return res.redirect('/iniciarsesion')
}

exports.cerrarcesion=(req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/iniciarsesion')
    })
}