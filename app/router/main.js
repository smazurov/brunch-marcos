var app = require('app');

// Defining the application router
module.exports = Backbone.Router.extend({
  routes: {
    '': 'home'
  },

  home: function() {
    var HomeLayout = require('views/home-layout');
    var layout = new HomeLayout();
    $('body').empty().append(layout.el);
  }
});
