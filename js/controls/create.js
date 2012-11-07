define(function (require) {

  var can = require('can'),
      Contact = require('../models/contact');

  var Create = can.Control({
    show: function(){
      this.contact = new Contact();
      this.element.html(can.view('js/controls/views/createView.ejs', {
        contact: this.contact,
        categories: this.options.categories
      }));
      this.element.slideDown(200);
    },
    hide: function(){
      this.element.slideUp(200);
    },
    '.contact input keyup': function(el, ev) {
      if(ev.keyCode == 13){
        this.createContact(el);
      }
    },
    '.save click' : function(el){
      this.createContact(el)
    },
    '.cancel click' : function(){
      this.hide();
    },
    '{document} #new-contact click': function(){
      this.show();
    },
    createContact: function() {
      var form = this.element.find('form');
        values = can.deparam(form.serialize());
      if(values.name !== "") {
        this.contact.attr(values).save();
        this.hide();
      }
    }
  });

  return Create;
});