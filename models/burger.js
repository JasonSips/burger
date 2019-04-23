// import the ORM to implement functions that will interact with the database
var orm = require('../config/orm.js');
// create the burger object
var burger = {
  // select all burger table entries
  selectAll: function (cb) {
    orm.selectAll('burgers', function (res) {
      cb(res);
    });
  },
  // the variables cols and vals are arrays
  insertOne: function (cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, function (res) {
      cb(res);
    });
  },
  // the objColVals is an object specifying columns as object keys with associated values
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, function (res) {
      cb(res);
    });
  }
};
// export the database functions for the controller (burgerController.js).
module.exports = burger;
