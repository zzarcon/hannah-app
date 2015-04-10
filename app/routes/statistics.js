import Ember from "ember";
import AuthenticatedRoute from "../mixins/authenticated-route";

export default Ember.Route.extend(AuthenticatedRoute, {
  needsAuthentication: true,

  model: function() {
    return this.get('store').find('followers-stat');
  }
});