import Ember from "ember";
import popularHashtags from "../popular-tags";

export default Ember.ArrayController.extend({
  itemController: 'campaign',
  availableActions: ['likeHashtagPhotos', 'likeUserPhotos', 'likeFollowerPhotos'],

  maximumLikes: 100,
  popularHashtags: popularHashtags,

  selectedPopularHastag: Ember.computed.defaultTo('popularHashtags.firstObject'),
  selectedAction: Ember.computed.defaultTo('availableActions.firstObject'),

  activeCampaigns: Ember.computed.filterBy('@this', 'id'),

  availableLikes: function() {
    var usedLikes = this.mapBy('likes').reduce(function(acum, value) {
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