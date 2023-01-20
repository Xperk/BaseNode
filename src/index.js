require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const configViewEngine = require('./configs/viewEngine')
const initWebRoute = require('./route/web')

//setup ViewEngine
configViewEngine(app);

//initRouter
initWebRoute(app);
app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})