import Ember from "ember";

export default Ember.Route.extend({
  redirect: function() {
    if (this.get('session.isLogged')) {
      this.transitionTo('dashboard');
    } else {
      this.transitionTo('login');
    }
  }
});