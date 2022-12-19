const express = require('express')
// import express from 'express';
const app = express()
const port = 3000

//route
app.get('/', (req, res) => {
  res.send('Hello Danh!!')
})

//127.0.0.1
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})