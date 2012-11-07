define(function (require) {

  var can = require('can'),
      Contact = require('../models/contact');

  var Contacts = can.Control({
    init: function(){

      this.element.html(can.view('js/controls/views/contactsList.ejs', {
        contacts: this.options.contacts,
        categories: this.options.categories
      }));
    },
    '.contact input focusout': function(el, ev) {
      this.updateContact(el);
    },
    '.contact input keyup': function(el, ev) {
      if(ev.keyCode == 13){
        el.trigger('blur')
      }
    },
    '.contact select change': function(el, ev) {
      this.updateContact(el)
    },
    '.remove click': function(el, ev){
      el.closest('.contact').data('contact').destroy();
    },
    '{Contact} created' : function(list, ev, contact){
      this.options.contacts.push(contact);
    },
    updateContact: function(el){
      var contact = el.closest('.contact').data('contact');
      contact.attr(el.attr('name'), el.val()).save();
    }
  });

  // Defaults is a static property that is merged with options.
  // Contact needs to be passed this way for magic Model events to wire up
  // when using amd.
  Contacts.defaults = { Contact: Contact };

  return Contacts;
});