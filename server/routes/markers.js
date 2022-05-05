const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.dbMarkers()
    .then((markers) => {
      console.log(markers)
      res.json(markers)
      return null
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', async (req, res) => {
  const markerObj = req.body

  db.dbAddLost(markerObj)
    .then((marker) => {
      res.json(marker)
      return null
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router