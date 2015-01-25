/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

//Styles
app.import('vendor/bootstrap/dist/css/bootstrap.css');
app.import('vendor/sweetalert/lib/sweet-alert.css');
app.import('vendor/leaflet-dist/leaflet.css');

//Javascripts
// app.import('vendor/bootstrap/dist/js/bootstrap.js');
app.import('vendor/ember-backdoor/backdoor.js');
app.import('vendor/sweetalert/lib/sweet-alert.js');
app.import('vendor/moment/moment.js');
app.import('vendor/Chart.js/Chart.js');
app.import('vendor/leaflet-dist/leaflet-src.js');
app.import('vendor/ember-leaflet/dist/ember-leaflet.js');

//Fonts
app.import('vendor/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
  exports: {
    destDir: 'fonts'
  }
});

module.exports = app.toTree();