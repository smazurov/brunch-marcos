var Model = require('./model'),
  Collection = require('./collection'),
  Link = {};

Link.Model = Model.extend({
  defaults: {
    name: '',
    url: '',
    external: false
  }
});
Link.Collection = Collection.extend({
  model: Link.Model,
  initializeHeaderLinks: function(data) {
    if (!data) {
      data = [{
        name: 'Link 1',
        url: '/link1'
      },
      {
        name: 'Link 2',
        url: '//brunch.io',
        external: true
      },
      {
        name: 'Link 3',
        url: '/test/'
      }];
    }
    this.add(data);
  }
});
module.exports = Link;
