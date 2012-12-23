describe('Home Page', function(){
  var HomeLayout = require('views/home-layout');
  var homeLayout = new HomeLayout();
  describe('Rendered', function(){
    var view;
    beforeEach(function() {
      view = homeLayout.render().view;
    });
    it('should have a jquery wrapped $el',function() {
      expect(homeLayout).to.have.property('$el');
    });
    it('layout should be rendered', function() {
      expect(homeLayout.__manager__).to.have.property('hasRendered')
        .that.is.true;
    });
    it('$el should be able to find a child element', function() {
      // console.log(view.$el);
      expect(view.$el.find('#foo')).to.have.length(1);
        // .that.is.true;
    });
  });
});
