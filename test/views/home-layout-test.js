describe('Home Page', function() {
  var HomeLayout = require('views/home-layout');
  var homeLayout = new HomeLayout({page: 'index'});
  var view, headerEl;
  beforeEach(function() {
    view = homeLayout.render().view;
    headerEl = view.$el.find('header');
  });
  describe('Layout', function() {
    it('should have a jquery wrapped $el',function() {
      expect(homeLayout).to.have.property('$el');
    });
    it('layout should be rendered', function() {
      homeLayout.__manager__.should.have.property('hasRendered')
        .that.equals(true);
    });
    it('$el should be able to find a child element', function() {
      expect(headerEl).to.have.length(1);
    });
  });
  describe('Header', function() {
    it('should display 4 links', function() {
      expect(headerEl.find('ul li')).to.have.length(4);
    });
    it('expect external links to have target=_blank', function() {
      expect(headerEl.find('a[target="_blank"]')).to.have.length.of.at.least(1);
    });
    it('should have a logo', function() {
      expect(headerEl.find('img')).to.have.length(1);
    });
  });
});
