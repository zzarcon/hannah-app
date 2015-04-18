import Ember from 'ember';
import AuthenticatedRoute from "../mixins/authenticated-route";

export default Ember.Route.extend(AuthenticatedRoute, {
  needsAuthentication: true,

  beforeModel: function() {
    // debugger;
    this._super();

    return this.get('store').find('admin');
  }
});