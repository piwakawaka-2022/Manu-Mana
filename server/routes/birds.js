/* eslint-disable promise/always-return */
const express = require('express')
const router = express.Router()

const db = require('../db/db')

// GET all birds API/V1/birds

router.get('/', (req, res) => {
  db.getAllBirds()
    .then((birds) => {
      res.json(birds)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

// GET all birds sightings in a list API/V1/birds/birdlist

router.get('/birdsightings', (req, res) => {
  db.getAllBirdsUsers()
    .then((birds) => {
      res.json(birds)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

// GET API/V1/user/:id

router.get('/user/:id', (req, res) => {
  db.getUserBirds(Number(req.params.id))
    .then((birds) => {
      res.json(birds)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

// POST API/V1/user/:id

router.post('/user/:id', (req, res) => {
  const newBirdSighting = req.body

  db.addBird(newBirdSighting)
    .then((idArr) => {
      const [id] = idArr
      newBirdSighting.id = id
      res.json(newBirdSighting)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

module.exports = router
