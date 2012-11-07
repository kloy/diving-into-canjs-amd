define(function (require) {

  var can = require('can');

  var Contact = can.Model({
    findAll: 'GET /contacts',
    create  : "POST /contacts",
    update  : "PUT /contacts/{id}",
    destroy : "DELETE /contacts/{id}"
  },{});

  Contact.List = can.Model.List({
    filter: function(category){
      this.attr('length');
      var contacts = new Contact.List([]);
      this.each(function(contact, i){
        if(category === 'all' || category === contact.attr('category')) {
          contacts.push(contact)
        }
      })
      return contacts;
    },
    count: function(category) {
      return this.filter(category).length;
    }
  });

  return Contact;
});