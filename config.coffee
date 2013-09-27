exports.config =
  # See docs at http://brunch.readthedocs.org/en/latest/config.html.

  # Application build path.  Default is public/
  # buildPath: ''

  files:
    javascripts:
      joinTo:
        'scripts/app.js': /^app/
        'scripts/vendor.js': /^(vendor|bower_components)/
        'test/scripts/test.js': /^test(\/|\\)(?!vendor)/
        'test/scripts/vendor.js': /^test(\/|\\)(?=vendor)/
      order:
        before: []
    stylesheets:
      joinTo:
        'styles/app.css': /^(app|vendor)/,
        'test/styles/test.css': /^test/
      order:
        before: [
          'vendor/styles/grid.styl'
          'app/views/styles/index.styl'
        ]
        # after: ['vendor/styles/helpers.css']
    templates:
      joinTo: 'scripts/app.js'

  plugins:
    stylus: # https://github.com/brunch/stylus-brunch#spriting
      spriting: no,
      iconPath: 'app/assets/images'
  minify: no
  modules:
    wrapper: 'commonjs'
    definition: 'commonjs'
    addSourceURLs: true
