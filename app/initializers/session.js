import Ember from "ember";

var Session = Ember.Object.extend({
  user: null
});

export default {
  name: 'session',
  after: 'store',

  initialize: function(container, application) {
    application.register('session:main', Session, {singleton: true});

    var store = container.lookup('store:main');
    var session = container.lookup('session:main');

    application.inject('controller', 'session', 'session:main');
    application.inject('route', 'session', 'session:main');
    application.inject('router', 'session', 'session:main');
    application.inject('view', 'session', 'session:main');

    application.deferReadiness();

    Ember.$.get('http://media-gram.herokuapp.com/api/session').then(function(response) {

      if (response.user) {
        var user = Ember.merge(response.user, {
          fullName: response.user.user_name,
          profilePicture: response.user.profile_picture
        });

        session.set('user', store.createRecord('user', user));
      }

      application.advanceReadiness();
    });
  }
};