exports.config =
  # See docs at http://brunch.readthedocs.org/en/latest/config.html.

  # Application build path.  Default is public/
  # buildPath: ''

  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^vendor/
        'test/javascripts/test.js': /^test(\/|\\)(?!vendor)/
        'test/javascripts/test-vendor.js': /^test(\/|\\)(?=vendor)/
      order:
        before: [
          'vendor/scripts/console-helper.js',
          'vendor/scripts/jquery-1.8.3.js',
          'vendor/scripts/lodash.underscore-1.0.0.rc.3.js',
          'vendor/scripts/backbone-0.9.9.js',
          'vendor/scripts/backbone.layoutmanager-0.7.3.js'
        ]
    stylesheets:
      joinTo:
        'stylesheets/app.css': /^(app|vendor)/,
        'test/stylesheets/test.css': /^test/
      # order:
        # before: ['vendor/styles/normalize.css']
        # after: ['vendor/styles/helpers.css']
    templates:
      joinTo: 'javascripts/app.js'

  stylus: # https://github.com/brunch/stylus-brunch#spriting
    spriting: no,
    iconPath: 'app/assets/images'
  minify: no