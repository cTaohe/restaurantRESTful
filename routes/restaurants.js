const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant.js')

// search
router.get('/search', (req, res) => {
  Restaurant.find((err, restaurants) => {
    const keyword = req.query.keyword
    const hasStr = (target, str) => target.toLowerCase().includes(str.toLowerCase())
    if (err) return console.error(err)
    const restaurant = restaurants.filter(({name, name_en, category}) => {
      return [name, name_en, category].some(str => hasStr(str, keyword))
    })
    return res.render('index', {restaurants: restaurant})
  })
})

router.get('/sort', (req, res) => {
  const sortRestaurant = req.query
  Restaurant.find()
  .sort(sortRestaurant)
  .exec((err, restaurants) => {
    if (err) return console.error(err)
    return res.render('index', {restaurants: restaurants})
  })
})

// 新增餐廳頁面
router.get('/new', (req, res) => {
  res.render('new')
})

// Detail
router.get('/:id', (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    if (err) return console.error(err)
    return res.render('detail', {restaurant: restaurant})
  })
})

// 新增一個餐廳
router.post('/', (req, res) => {
  const restaurant = Restaurant({
    name: req.body.name,
    name_en: req.body.name_en,
    category: req.body.category,
    image: req.body.image,
    location: req.body.location,
    phone: req.body.phone,
    google_map: req.body.google_map,
    rating: req.body.rating,
    description: req.body.description
  })
  restaurant.save(err => {
    if (err) return console.error(err)
    return res.redirect('/')
  })
})

// 編輯餐廳頁面
router.get('/:id/edit', (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    if (err) return console.error(err)
    return res.render('edit', {restaurant: restaurant})
  })
})

// 編輯餐廳
router.put('/:id', (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    if (err) return console.error(err)
    Object.assign(restaurant, req.body)
    restaurant.save(err => {
      if (err) return console.error(err)
      return res.redirect(`/restaurants/${req.params.id}`)
    })
  })
})

// 刪除餐廳
router.delete('/:id/delete', (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    if (err) return console.error(err)
    restaurant.remove(err => {
      if (err) return console.error(err)
      return res.redirect('/')
    })
  })
})

module.exports = router