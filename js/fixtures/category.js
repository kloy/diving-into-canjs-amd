define(function (require) {

  var fixture = require('fixture');

  var CATEGORIES = [
    {
      id: 1,
      name: 'Family',
      data: 'family'
    },
    {
      id: 2,
      name: 'Friends',
      data: 'friends'
    },
    {
      id: 3,
      name: 'Co-workers',
      data: 'co-workers'
    }
  ];

  fixture('GET /categories', function(){
    return [CATEGORIES];
  });

  // Nothing to return for this module...
  return false;
});