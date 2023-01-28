const express = require('express')
const router = express.Router();
const homeController = require('../controller/homeController')
const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage)
    router.get('/detail/user/:id',homeController.getDetailPage)
    router.post('/create',homeController.create)
    router.get('/about', (req, res) => {
        res.send("I'm Tung");
    })
    router.get('/user/edit/:id',homeController.edit);
    router.post('/deleteuser',homeController.deleteuser)
    router.post('/update',homeController.updateuser)
    return app.use('/',router);
    
}

module.exports = initWebRoute;