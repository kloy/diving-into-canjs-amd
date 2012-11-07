define(function (require) {

  var can = require('can');

  var Category = can.Model({
    findAll: 'GET /categories'
  }, {});

  return Category;
});