import Ember from "ember";

var Session = Ember.Object.extend({
  user: null
});

export default {
  name: 'session',
  after: 'store',

  initialize: function(container, app) {
    app.register('session:main', Session, {singleton: true});

    var store = container.lookup('store:main');
    var session = container.lookup('session:main');
    var sessionUri = MediaGramENV.host + '/api/session';

    app.inject('controller', 'session', 'session:main');
    app.inject('route', 'session', 'session:main');
    app.inject('router', 'session', 'session:main');
    app.inject('view', 'session', 'session:main');

    app.deferReadiness();

    Ember.$.get(sessionUri).then(function(response) {
      if (response.user) {
        var user = Ember.merge(response.user, {
          fullName: response.user.user_name,
          profilePicture: response.user.profile_picture
        });

        session.set('user', store.createRecord('user', user));
      }

      app.advanceReadiness();
    }).fail(function() {
      app.advanceReadiness();
    });
  }
};