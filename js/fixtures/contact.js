define(function (require) {

  var fixture = require('fixture');

  var CONTACTS = [
    {
      id: 1,
      name: 'William',
      address: '1 CanJS Way',
      email: 'william@husker.com',
      phone: '0123456789',
      category: 'co-workers'
    },
    {
      id: 2,
      name: 'Laura',
      address: '1 CanJS Way',
      email: 'laura@starbuck.com',
      phone: '0123456789',
      category: 'friends'
    },
    {
      id: 3,
      name: 'Lee',
      address: '1 CanJS Way',
      email: 'lee@apollo.com',
      phone: '0123456789',
      category: 'family'
    }
  ];

  fixture('GET /contacts', function(){
    return [CONTACTS];
  });
  var id= 4;
  fixture("POST /contacts", function(){
    return {id: (id++)}
  });
  fixture("PUT /contacts/{id}", function(){
    return {};
  });
  fixture("DELETE /contacts/{id}", function(){
    return {};
  });

  // Nothing to return for this module...
  return false;
});