require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const configViewEngine = require('./configs/viewEngine')
const initWebRoute = require('./route/web')
// const connect = require('./configs/connectDb')

//hỗ trợ việc gửi data từ client lên server
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//setup ViewEngine
configViewEngine(app);

//initRouter
initWebRoute(app);
app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})