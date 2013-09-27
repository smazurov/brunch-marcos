Brunch Marcos
=============

Simple javascript backbone.js skeleton built on top of [brunch](http://brunch.io) that includes essentials and provides some guidance at creating maintainable apps.

### Included tech

* Javascript - because you should know JS before learning anything that compiles
into it, and by using brunch you can incorporate `CoffeeScript`, `LiveScript` or anything, really, when you feel comfortable.
* [Backbone](http://backbonejs.org/) - why we're all here
* [Lo-Dash](http://lodash.com) - An alternative to Underscore.js, delivering consistency, customization, performance, and extra features.
* [jQuery](http://jquery.com/) - For that low level dom manipulation
* [Handlebars](http://handlebarsjs.com) - sensible default thats faster than underscore, wildly used and understood
* [Stylus](http://learnboost.github.com/stylus/) with [nib](http://visionmedia.github.com/nib/) - dynamic stylesheet language, comparable with LESS and SASS
* [LayoutManager](https://github.com/tbranyen/backbone.layoutmanager) - because you need something to help backbone wrangle those views

## Install

- Install [node.js](http://nodejs.org)
- Install Brunch & bower: `sudo npm install -g brunch bower`
- Run `brunch new gh:smazurov/brunch-marcos <project name>` to download the skeleton into your project folder.
- `$ cd <project name>`

## Compiling

- To build your project run `brunch build`.
- To continually watch your project folder changes and auto-compile, use `brunch watch`.
- If you want to start a simple server, run `brunch watch --server`
- If you want to build a minified version (for production release), run `brunch build --production`

See more info on the [official brunch docs](http://brunch.readthedocs.org/en/latest/)

## Unit Testing

The [Mocha](http://visionmedia.github.com/mocha/) test-suite is included by default.  Files located in `tests` that end with `_test.js` (or .coffee) are automatically packaged.

To run tests in the browser, navigate to `public/test/index.html`.  Test-related code is automatically recompiled during `brunch build` and `brunch watch`, and will automatically refresh the test page.
To set up and get started on using a specific testing interface, take a look at the following guides:

* [TDD](https://gist.github.com/4361378)
* [BDD](https://gist.github.com/4361398)
* [QUnit](https://gist.github.com/4361413)

# More Information

## Todo

- ~~Get a basic skeleton app~~
- ~~Write tests for it~~
- Write generators
- Include a more involved example application
- Screencast

## Whys

### Stylus

Stylus is used as a `CSS` preprocessor that abstracts away a lot of painful things
we deal in with in `CSS`. It is solving the same problem as `LESS` and `SASS` with following
additional benefits:

* Customizable syntax. You can write plain CSS or you may drop braces / semicolons or even `:`s etc.
* Transparent mixins. If you don't need a lot of features, you can just stick to dropping vendor prefixes. But, of course, advanced features are supported too.
* `nib.` Contains all CSS3 mixins. It's like a `compass` for `sass` but way better because of transparent mixins

As far as compiling is concerned everything gets turned into css and compiles down to a single file when you have `brunch watch` running or do `brunch build`

### Handlebars

Handlebars was chosen due to its popularity and the way it restricts what you can do in templates, while retaining the flexibility of allowing custom functions to format the data you pass in. It closely resembles `Mustache` and immediately familiar to anyone that knows `HTML` as its not inventing any new syntax.  As a result its also one of the fastest options on the market. It is also faster than underscores template implementation.

### Backbone LayoutManager (LM)

`LM` provides a logical structure for assembling layouts with Backbone Views. Designed to be adaptive and configurable for painless integration. Includes automatic cleanup as well as ability to define your own to make sure all your events are taken care of and no zombies are left hungering for brains.

## License

Brunch Marcos is distributed under the MIT license. All 3rd party libraries and components are distributed under their respective license terms.

```
Copyright (C) 2012 Stepan Mazurov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
