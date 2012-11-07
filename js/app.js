define(function (require) {

  var can = require('can');

  var $ = require('jquery'),
      Category = require('./models/category'),
      Contact = require('./models/contact'),
      fixtureCategory = require('./fixtures/category'),
      fixtureContact = require('./fixtures/contact'),
      Create = require('./controls/create'),
      Contacts = require('./controls/contacts'),
      Filter = require('./controls/filter');

  // Explicitly tell route when to stop. Prevents problem where multiple dom
  // ready events can execute in any order.
  can.route.ready(false);
  can.route('filter/:category');
  can.route('', {category: 'all' });

  $(function () {

    // Start the route in our main dom ready.
    can.route.ready(true);

    $.when(Category.findAll(), Contact.findAll()).then(
      function(categoryResponse, contactResponse){

        var categories = categoryResponse[0],
            contacts = contactResponse[0];

        new Create('#create', {
          categories: categories
        });

        new Contacts('#contacts', {
          contacts: contacts,
          categories: categories
        });

        new Filter('#filter', {
          contacts: contacts,
          categories: categories
        });
    });
  });

  return false;
});