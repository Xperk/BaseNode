const express = require('express');
const path = require('path')
//Cấu hình viewEngine
const configViewEngine = (app) =>{
    app.use(express.static('src/public'))
    app.set('view engine','ejs');
    app.set('views',path.join(__dirname,'../views'));
}
module.exports = configViewEngine;