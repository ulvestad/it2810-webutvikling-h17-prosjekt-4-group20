// -- Packages
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const http = require('http')
const mongoose = require('mongoose')
const User = require('./server/models/user')
const api = require('./server/controllers/index')
//const Movie = require('./server/models/movie')
const config = require('./server/config')


// -- Config
mongoose.Promise = require('bluebird')
mongoose.connect(config.database, {useMongoClient: true,})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))


// -- Routes

// Enable CORS from client side
// TODO Remove this in production <3
app.use((req, res, next) => {  
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials")
  res.header("Access-Control-Allow-Credentials", "true")
  next()
})

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')))
// API location
app.use('/api', api)
// Send all other requests to the Angular app
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist/index.html')))


// -- Start
const server = http.createServer(app)
server.listen(config.port, () => console.log(`Running on localhost:${config.port}`))

module.exports = server