import Ember from "ember";

export default Ember.Route.extend({
  beforeModel: function() {
    if (this.get('session.isLogged')) {
      this.replaceWith('dashboard');
    } else {
      this.replaceWith('login');
    }
  }
});