var View = require('./view').View;
var template = require('./templates/home-layout');

module.exports = View.extend({
  template: template,
  id: 'layout',

  beforeRender: function() {
    var Header = require('./home/header'),
      Content = require('./home/' + this.options.page),
      Link = require('models/link');
    var links = new Link.Collection();
    links.initializeHeaderLinks();
    var header = new Header({collection: links});
    var content = new Content();
    this.setView('header', header);
    this.insertView('content', content);
  }
});
