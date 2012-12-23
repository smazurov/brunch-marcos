var app = require('app');

// Defining the application router
module.exports = Backbone.Router.extend({
  routes: {
    '': 'home'
  },

  home: function() {
    var HomeLayout = require('views/home-layout');
    var layout = new HomeLayout({});
    console.log(layout.render().view.$el);
    $('body').empty().append(layout.render().view.el);
  }
});
