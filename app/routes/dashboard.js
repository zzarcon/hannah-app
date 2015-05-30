import Ember from "ember";
import AuthenticatedRoute from "../mixins/authenticated-route";

export default Ember.Route.extend(AuthenticatedRoute, {
  needsAuthentication: true,
  beforeModel: function() {
    return this.get('store').find('campaign');
  },

  //Redirect to "/campaigns" if the user has no campaigns for force him to create one
  redirect: function() {
    var hasCampaigns = this.get('store').all('campaign').get('length');

    if (!hasCampaigns) {
      this.replaceWith('campaigns');
    }
  }
});