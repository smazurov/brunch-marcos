var View = require('../view').View,
  template = require('./templates/header');

var LinksView = View.extend({
});

module.exports = View.extend({
  template: template,

  beforeRender: function() {
    this.iterateOverList(false, LinksView);
  }
});
