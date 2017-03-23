var Sequelize = require('sequelize');
var db = require('./_db');


const Day = db.define('day', {
  number: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});



module.exports = Day;
