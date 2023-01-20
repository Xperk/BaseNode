const express = require('express')
const router = express.Router();
const homeController = require('../controller/homeController')
const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage)

    router.get('/about', (req, res) => {
        res.send("I'm Tung");
    })
    return app.use('/',router);
    
}

module.exports = initWebRoute;