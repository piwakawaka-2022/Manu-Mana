const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.dbMarkers()
    .then((markers) => {
      res.json(markers)
      return null
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', async (req, res) => {
  const markerObj = req.body
  db.dbAddMarker(markerObj).then((markerId) => {
    db.getMarker(markerId)
      .then((markers) => {
        res.json(markers)
        return null
      })
      .catch((err) => {
        res.status(500).send(err.message)
      })
  })
})

module.exports = router
