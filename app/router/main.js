function renderRegion(region) {
  var HomeLayout = require('views/home-layout');
  var layout = new HomeLayout({page: region});
  layout.render();
  $('body').empty().append(layout.el);
}

// Defining the main application router
module.exports = Backbone.Router.extend({
  routes: {
    '': 'index',
    'docs': 'docs'
  },

  index: function() {
    renderRegion('index');
  },
  docs: function() {
    renderRegion('docs');
  }
});
