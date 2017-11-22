/* Module dependencies */
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const http = require('http')
const mongoose = require('mongoose')
const sanitize = require('mongo-sanitize')
const expressValidator = require('express-validator');

const api = require('./server/controllers/index')

/* Load environment variables */
require('dotenv').config()

/* Create Express server */
const app = express()

/* Connect to MongoDB*/
mongoose.Promise = require('bluebird')
mongoose.connect(process.env.DB_HOST + process.env.NODE_ENV, {useMongoClient: true})

mongoose.connection.on('error', (err) => {
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.')
  process.exit()
})

/* Express configuration */
app.use(express.static(path.join(__dirname, 'dist')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(expressValidator());

/* Routes */
app.use((req, res, next) => {
	req.body = sanitize(req.body) // sanitize data for mongodb
	next()
})

app.use('/api', api)
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist/index.html')))

/* Start Express server */
const server = http.createServer(app)
server.listen(process.env.PORT || 3000, () => console.log(`Running on localhost:${process.env.PORT || 3000}`))

module.exports = server
