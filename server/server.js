const express = require('express')
const path = require('path')
const authRoutes = require('./routes/auth')
const server = express()

server.use('/api/v1', authRoutes)
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})
module.exports = server
