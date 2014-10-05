/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('vendor/bootstrap/dist/css/bootstrap.css');
// app.import('vendor/bootstrap/dist/js/bootstrap.js');
app.import('vendor/ember-backdoor/backdoor.js');

module.exports = app.toTree();
