import Ember from "ember";

export default Ember.Route.extend({
  actions: {
    logout: function() {
      localStorage.removeItem("session_token");
      window.location.reload();
    }
  }
});