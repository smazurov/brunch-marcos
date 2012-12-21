var app = require('app');

// Defining the application router
module.exports = Backbone.Router.extend({
  routes: {
    '': 'home'
  },

  home: function() {
    console.log('sup');
  }
});
