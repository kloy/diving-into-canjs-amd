define(function (require) {

  var can = require('can');

  var Filter = can.Control({
    init: function(){
      var category = can.route.attr('category') || "all";
      this.element.html(can.view('js/controls/views/filterView', {
        contacts: this.options.contacts,
        categories: this.options.categories
      }));
      this.element.find('[data-category="' + category + '"]').parent().addClass('active');
    },
    '[data-category] click': function(el, ev) {
      this.element.find('[data-category]').parent().removeClass('active');
      el.parent().addClass('active');
      can.route.attr('category', el.data('category'));
    }
  });

  return Filter;
});