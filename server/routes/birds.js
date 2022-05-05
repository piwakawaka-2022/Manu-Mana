/* eslint-disable promise/always-return */
const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getAllBirds()
    .then((birds) => {
      // throw Error('oops')
      res.json(birds)
    })
    .catch((err) => {
      // res.sendStatus(500)
      res.status(500).json({ message: err.message })
    })
})

module.exports = router
