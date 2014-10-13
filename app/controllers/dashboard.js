import Ember from "ember";
import popularHashtags from "../popular-tags";

export default Ember.ArrayController.extend({
  itemController: 'campaign',
  availableActions: ['likeHashtagPhotos', 'likeUserPhotos', 'likeFollowerPhotos'],

  maximumLikes: 100,
  availableLikes: 100,
  popularHashtags: popularHashtags,

  selectedPopularHastag: Ember.computed.defaultTo('popularHashtags.firstObject'),
  selectedAction: Ember.computed.defaultTo('availableActions.firstObject'),

  activeCampaigns: Ember.computed.filterBy('@this', 'id'),

  actions: {
    createCampaign: function() {
      this.get('store').createRecord('campaign');
    }
  }
});