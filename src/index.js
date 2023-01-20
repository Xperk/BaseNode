const express = require('express')
const app = express()
const port = 3000
const configViewEngine = require('./configs/viewEngine')

configViewEngine(app);
app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})