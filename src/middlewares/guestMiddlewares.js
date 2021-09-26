function guestMiddlewares(req, res, next) {
    if (req.session.userLogged){
        return res.redirect ('/usuarios/perfil/'+req.session.userLogged.id);
    }
    next();
}

module.exports = guestMiddlewares;