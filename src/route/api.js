const express = require('express')
const router = express.Router();
const APIController = require('../controller/APIController')
const initAPIRoute = (app) => {
    router.get('/users', APIController.getAllUsers)
    router.post('/create-new-user',APIController.createNewUser)
    router.put('/update-user',APIController.updateuser)
    router.delete('/delete-user/:id',APIController.deleteuser)
    return app.use('/api/v1/',router);
    
}

module.exports = initAPIRoute;