import Ember from "ember";

export default Ember.Route.extend({
  beforeModel: function() {
    console.log(this.get('session.isLogged'));
    if (this.get('session.isLogged')) {
      this.replaceWith('dashboard');
    } else {
      this.replaceWith('login');
    }
  }
});