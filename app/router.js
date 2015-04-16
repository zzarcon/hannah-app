import Ember from 'ember';
import config from 'media-gram/config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,

  /**
   * Send info to Google Analytics
   * @return {Object}
   */
  notifyGoogleAnalytics: function() {
    return ga('send', 'pageview', {
      page: this.get('url'),
      title: this.get('url')
    });
  }.on('didTransition')
});

Router.map(function() {
  this.route('login');
  this.route('dashboard');
  this.route('campaigns');
  this.route('statistics');
  this.route('admin');
});

export default Router;