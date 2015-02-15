/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var HtmlbarsCompiler = require('ember-cli-htmlbars');
var templateTree = new HtmlbarsCompiler('app/templates', {
  isHTMLBars: true,
  templateCompiler: require('./bower_components/ember/ember-template-compiler')
});
var app = new EmberApp({
  fingerprint: {
    exclude: ['marker-icon', 'marker-shadow']
  }
});

//Styles
app.import('bower_components/bootstrap/dist/css/bootstrap.css', {
  destDir: 'assets'
});
app.import('bower_components/sweetalert/lib/sweet-alert.css');
app.import('bower_components/leaflet-dist/leaflet.css');

//Javascripts
// app.import('bower_components/bootstrap/dist/js/bootstrap.js');
app.import('bower_components/ember-backdoor/backdoor.js');
app.import('bower_components/sweetalert/lib/sweet-alert.js');
app.import('bower_components/moment/moment.js');
app.import('bower_components/Chart.js/Chart.js');
app.import('bower_components/leaflet-dist/leaflet-src.js');
app.import('bower_components/ember-leaflet/dist/ember-leaflet.js');

//Fonts
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
  exports: {
    destDir: 'fonts'
  }
});

module.exports = app.toTree();