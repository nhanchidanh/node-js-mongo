const path = require('path')
const express = require('express')
const morgan = require('morgan')
const methodOveride = require('method-override')
const handlebars = require('express-handlebars')
// import express from 'express';
const app = express()
const port = 3005

//vì bên kìa là hàm index() nên kh cần viết rõ ra tên hàm
const route = require('./routes')
const db = require('./config/db');

//COnnect to DB
db.connect();

//static file //file tài nguyên css, img,..
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded(
  {
    extended: true
  }
))
app.use(express.json())

app.use(methodOveride('_method'))
//HTTP logger
app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebars.engine(
  {
    extname: '.hbs',
    helpers:{
      sum: (a,b) => a+b,
    }
  }
))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname,'resources','views'))


//routr init khởi tạo tuyến đường
route(app);


//127.0.0.1
app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})