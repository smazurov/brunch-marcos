require('lib/view_helpers');

Backbone.LayoutManager.configure({
  fetch: function (path) {
    return path;
  },
  render: function(template, context) {
    return template(context);
  }
});

// Base class for all views
var View = Backbone.LayoutView.extend({

});

// we specificially export a View so we can set up type specific views i.e
// list view, region view, etc
module.exports = {View: View};
