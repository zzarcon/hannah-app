import Ember from 'ember';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('dashboard');
  this.route('campaigns');
  this.route('statistics');
});

export default Router;