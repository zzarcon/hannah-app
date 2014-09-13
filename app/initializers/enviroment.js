import Ember from "ember";
var ENV = Ember.ObjectProxy.extend({
  content: window.MediaGramENV
});

export default {
  name: 'enviroment',

  initialize: function(container, app) {
    app.register('enviroment:main', ENV, {singleton: true});

    app.inject('controller', 'ENV', 'enviroment:main');
    app.inject('route', 'ENV', 'enviroment:main');
    app.inject('router', 'ENV', 'enviroment:main');
    app.inject('view', 'ENV', 'enviroment:main');
  }
};