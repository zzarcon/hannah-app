import Ember from "ember";
import config from 'media-gram/config/environment';

var Session = Ember.Object.extend({
  error: null,
  user: null,
  isLogged: Ember.computed.bool('user.id'),
  isExpired: Ember.computed.equal('error', 'Subscription has expired')
});

export default {
  name: 'session',
  after: 'store',

  initialize: function(container, app) {
    app.register('session:main', Session, {singleton: true});

    var adapter = container.lookup('adapter:application');
    var headers = adapter.headers || {};
    var store = container.lookup('store:main');
    var session = container.lookup('session:main');
    var sessionUri = config.host + '/api/session';
    var headerName = 'X-Session-Token';
    var paramName = "session_token";
    var uriToken = document.location.href.split(paramName + '=')[1]; //TODO: Improve way to get the token
    var token = uriToken || localStorage.getItem(paramName);

    if (uriToken) {
      localStorage.setItem(paramName, token);
    }

    headers[headerName] = token;
    adapter.headers = headers;

    $.ajaxSetup({
      beforeSend: function(xhr) {
        xhr.setRequestHeader(headerName, token);
      }
    });

    app.inject('controller', 'session', 'session:main');
    app.inject('route', 'session', 'session:main');
    app.inject('router', 'session', 'session:main');
    app.inject('view', 'session', 'session:main');

    app.deferReadiness();

    Ember.$.get(sessionUri).then(function(response) {
      var user = response.user;
      
      if (user) {
        store.pushPayload('user', {user: user});
        user = store.getById('user', user.id);

        session.set('user', user);
      }

      app.advanceReadiness();
    }).fail(function(response) {
      var json = response.responseJSON;

      if (json.error) {
        session.set('error', json.error);
      }

      app.advanceReadiness();
    });
  }
};