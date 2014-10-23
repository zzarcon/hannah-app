import Ember from "ember";
import popularHashtags from "../popular-tags";

export default Ember.ArrayController.extend({
  itemController: 'campaign',
  sortProperties: ['updatedAt'],
  availableActions: ['likeHashtagPhotos', 'likePopularPhotos'], //, 'likeUserPhotos', 'likeFollowerPhotos'

  maximumLikes: 100,
  popularHashtags: popularHashtags,

  selectedPopularHastag: Ember.computed.defaultTo('popularHashtags.firstObject'),
  selectedAction: Ember.computed.defaultTo('availableActions.firstObject'),

  activeCampaigns: Ember.computed.filterBy('@this', 'id'),
  likesExceded: Ember.computed.lt('availableLikes', 0),

  availableLikes: function() {
    var likes = this.filterBy('likes').map(function(campaign) {
      return parseInt(campaign.get('likes'));
    });

    if (Ember.isEmpty(likes)) {
      likes = [0];
    }

    var usedLikes = likes.reduce(function(acum, value) {
      return acum + value;
    });

    return this.get('maximumLikes') - usedLikes;
  }.property('this.@each.likes', 'maximumLikes'),

  actions: {
    createCampaign: function() {
      this.get('store').createRecord('campaign');
    }
  }
});