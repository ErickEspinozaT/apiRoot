const Router = require('express').Router;
const UserRoutes = require('./users.routes')

class Routes {
    constructor() {
        this.router = Router();
        this.setRoutes();
    }

    setRoutes() {
        // this.router.use()
        this.router.use('/users', new UserRoutes().router)
    }
}
module.exports = Routes;