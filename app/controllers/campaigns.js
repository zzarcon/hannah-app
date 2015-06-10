import Ember from "ember";
import popularHashtags from "../popular-tags";
import config from 'media-gram/config/environment';

export default Ember.ArrayController.extend({
  itemController: 'campaign',
  sortProperties: ['updatedAt'],
  availableActions: ['likeHashtagPhotos'], //, 'likePopularPhotos', 'geolocation', 'likeUserPhotos', 'likeFollowerPhotos'

  maximumLikes: config.maximumLikes,
  popularHashtags: popularHashtags,

  selectedPopularHastag: Ember.computed.defaultTo('popularHashtags.firstObject'),
  selectedAction: Ember.computed.defaultTo('availableActions.firstObject'),
  activeCampaigns: Ember.computed.filterBy('@this', 'id'),
  likesExceded: Ember.computed.lt('availableLikes', 0),
  canSaveCampaign: Ember.computed.and('campaign.isDirty', 'campaign.target', 'isTargetValid'),
  cantSaveCampaign: Ember.computed.not('canSaveCampaign'),
  isTargetValid: Ember.computed.not('targetContainSpaces'),

  campaign: function() {
    var firstCampaign = this.get('firstObject') ? this.get('firstObject.content') : null;
    return firstCampaign || this.get('store').createRecord('campaign');
  }.property(),

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

  targetContainSpaces: function() {
    var target = this.get('campaign.target');

    return target.indexOf(' ') !== -1;
  }.property('campaign.target'),

  actions: {
    createCampaign: function() {
      this.get('store').createRecord('campaign');
    },
    saveCampaign: function() {
      var campaign = this.get('campaign');

      campaign.save().then(function() {
        swal("Success", "Campaing saved", "success");
      }).catch(function() {
        sweetAlert("Error", "Error while creating the campaign", "error");
      });
    },
    setTarget: function(hashtag) {
      this.get('campaign').set('target', hashtag);
    }
  }
});