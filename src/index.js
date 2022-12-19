const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
// import express from 'express';
const app = express()
const port = 3000

//HTTP logger
app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebars.engine(
  {
    extname: '.hbs'
  }
))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname,'/resources/views'))

console.log(path.join(__dirname,'/resources/views'))

//route
app.get('/', (req, res) => {
  // res.send('Hello Danh!!')
  res.render('home')
})
app.get('/news', (req, res) => {
  // res.send('Hello Danh!!')
  res.render('news')
})

//127.0.0.1
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})