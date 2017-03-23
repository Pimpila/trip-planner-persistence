var db = require('../models');
var Hotel = db.model('hotel');
var Restaurant = db.model('restaurant');
var Activity = db.model('activity');
var Day = db.model('day');
var Day_Restaurant = db.model('day_restaurants');
var router = require('express').Router();

router.get('/hotels', function (req, res, next) {
  Hotel.findAll()
  .then(function (allHotels) {
    res.json(allHotels)
  })
  .catch(next);
});

router.get('/restaurants', function (req, res, next) {
  Restaurant.findAll()
  .then(function (allRestaurants) {
    res.json(allRestaurants)
  })
  .catch(next);
});

router.get('/activities', function (req, res, next) {
  Activity.findAll()
  .then(function (allActivities) {
    res.json(allActivities)
  })
  .catch(next);
});



// days
router.get('/days', function (req, res, next) {
  Day.findAll()
  .then(function (allDays) {
    res.json(allDays)
  })
  .catch(next);
});

router.get('days/:id', function (req, res, next) {
  Day.findById(req.params.id)
  .then(function (day) {
    res.json (day)
  })
  .catch (next);
})

router.post('/days/add', function(req, res, next) {
  Day.create(req.data)
  .then(function(createdDay) {
    res.json(createDay);
  })
})

router.post('/days/:id/restaurants', function (req, res, next) {
  var specificDay = req.params.id;
  Day_Restaurant.create({
    dayId: specificDay,
    restaurantId: req.body.id
  })
})


router.put('/days/change', function (req, res, next) {
  // update the day itinerary data
});

router.delete('/days/delete', function (req, res, next) {
  // remove day.
});


module.exports = router;
