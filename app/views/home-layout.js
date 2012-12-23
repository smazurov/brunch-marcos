var View = require('./view').View;
var template = require('./templates/home-layout');

module.exports = View.extend({
    template: template,
    id: 'home',
    initialize: function() {
        // this.idAttribute = 'home';
    }
});
