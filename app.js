// include express form node_nodules
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const Restaurant = require('./models/restaurant.js')

// setting mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongoose error')
})
db.once('open', () => {
  console.log('mongoose connected')
})

// setting static page
app.use(express.static('public'))

// setting handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// use method override
app.use(methodOverride('_method'))

// body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

// 載入路由器
app.use('/', require('./routes/home.js'))
app.use('/restaurants', require('./routes/restaurants.js'))

// start and listen the server
app.listen(port, () => {
  console.log(`The express is on http://localhost:${port}`)
})