var View = require('./view').View;
var template = require('./templates/home-layout');

module.exports = View.extend({
  template: template,
  id: 'layout',

  initialize: function() {
    var Header = require('./home/header'),
      Content = require('./home/' + this.options.page),
      Link = require('models/link');
    var links = new Link.Collection();
    links.initializeHeaderLinks();
    var header = new Header({collection: links});
    this.setView('header', header, true);
    var content = new Content();
    this.insertView('content', content);
  }
});
