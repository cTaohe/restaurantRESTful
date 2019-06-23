const Restaurant = require('./models/restaurant.js')

exports.sort = (req, res) => {
  const sortRestaurant = req.query
  Restaurant.find()
  .sort(sortRestaurant)
  .exec((err, restaurants) => {
    if (err) return console.error(err)
    return res.render('index', {restaurants: restaurants})
  })
}