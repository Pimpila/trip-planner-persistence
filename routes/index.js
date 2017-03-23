var Promise = require('bluebird');
const router = require('express').Router();
const Hotel = require('../models/hotel');
const Activity = require('../models/activity');
const Restaurant = require('../models/restaurant');
// var router = require('express').Router();
// var Hotel = require('../models/hotel');
// var Restaurant = require('../models/restaurant');
// var Activity = require('../models/activity');

router.get('/', function(req, res, next) {
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
  ])
  .spread(function(dbHotels, dbRestaurants, dbActivities) {
    res.render('index', {
      templateHotels: dbHotels,
      templateRestaurants: dbRestaurants,
      templateActivities: dbActivities
    });
  })
  .catch(next);
});


router.get('/api/hotels', function (req, res, next) {
  Hotel.findAll()
  .then(function (theHotels) {
    res.json(theHotels)
  })
  .catch(next)
});

router.get('/api/restaurants', function (req, res, next) {
  Restaurant.findAll()
  .then(function (theRestaurants) {
    res.json(theRestaurants)
  })
  .catch(next);
});

router.get('/api/activities', function (req, res, next) {
  Activity.findAll()
  .then(function (theActivities) {
    res.json(theActivities)
  })
  .catch(next);
});



module.exports = router
