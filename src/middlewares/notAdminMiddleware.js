function notAdminMiddleware(req, res, next) {

if (!res.locals.isLogged.admin){
        res.send('Acceso Restringido');
    }


    next();
}

module.exports = notAdminMiddleware;