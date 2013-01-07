require('lib/view_helpers');

Backbone.Layout.configure({
  fetch: function (path) {
    return path;
  },
  render: function(template, context) {
    return template(context);
  }
});

// Base class for all views
var View = Backbone.Layout.extend({
  iterateOverList: function(viewObj, selector, list) {
    // var list, View, selector;
    // Iterate over the passed list and create a view for each item.
    list = list || this.collection.models;
    viewObj = viewObj || View;
    if (_.isArray(selector)) {
      list = selector;
    }
    if (_.isString(viewObj)) {
      selector = viewObj;
      viewObj = View;
    } else if (_.isArray(viewObj)) {
      list = viewObj;
      viewObj = View;
    }

    _.each(list, function(model) {
      // Pass the sample data to the new SomeItem View.
      var childView = new viewObj({model: model});
      if (_.isString(selector)) {
        this.setView(selector, childView, true);
      } else {
        this.setView(childView, true);
      }
    }, this);
  }
});

// we specificially export a View so we can set up type specific views i.e
// list view, region view, etc
module.exports = {View: View};
