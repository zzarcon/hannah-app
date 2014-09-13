import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;
Ember.LOG_VERSION = false;

var App = Ember.Application.extend({
  modulePrefix: 'media-gram', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'media-gram');

export default App;
