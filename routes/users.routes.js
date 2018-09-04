const Router = require('express').Router;
const { getUsers, createUser, verifyToken, authenticateUser } = require('../controllers/user.controller')

class UserRoutes {
    constructor() {
        this.router = Router();
        this.config();
    }
    config() {
        this.router.post('/getUsers', getUsers);
        this.router.post('/createUser', createUser);
        this.router.post('/loginUser', authenticateUser);
    }

    test(req, res) {
        res.json({message: 'tthis is a message'});
        console.log(res.json('messag'));
    }
}

module.exports = UserRoutes;