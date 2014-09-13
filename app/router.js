import Ember from 'ember';

var Router = Ember.Router.extend({
  location: MediaGramENV.locationType
});

Router.map(function() {
  this.route('login');
  this.route('dashboard');
});

export default Router;