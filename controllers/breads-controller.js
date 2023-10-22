const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
    res.render('Index',
      {
        breads: Bread
      }
    )
  // res.send(Bread)
})

// SHOW
breads.get('/0', (req, res) => {
    res.send(Bread[0])
})
  
module.exports = breads
