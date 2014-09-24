import Ember from "ember";
import popularHashtags from "../popular-tags";

export default Ember.ObjectController.extend({
  availableActions: [{
    value: 'likeHashtagPhotos',
    text: 'like photos with this hashtag'
  }, {
    value: 'likeUserPhotos',
    text: 'like photos of the user'
  }, {
    value: 'likeFollowerPhotos',
    text: 'like photos of followers'
  }],
  popularHashtags: popularHashtags,

  selectedPopularHastag: Ember.computed.defaultTo('popularHashtags.firstObject'),
  selectedAction: Ember.computed.defaultTo('availableActions.firstObject'),

  /**
   * By default a random value of the popular tags
   * @return {String} value of the campaign sended to the server
   */
  targetValue: function() {
    var min = 0, max = this.get('popularHashtags.length') - 1;
    var index = Math.floor(Math.random() * (max - min + 1)) + min;

    return this.get('popularHashtags').objectAt(index);
  }.property(),

  setPopularValue: function() {
    this.set('targetValue', this.get('selectedPopularHastag'));
  }.observes('selectedPopularHastag'),

  actions: {
    changeSelectedAction: function(action) {
      this.set('selectedAction', action);
    },

    createCampaign: function() {
      var action = this.get('selectedAction.value');
      var campaign = this.get('store').createRecord('campaign', {
        actionName: action,
        target: this.get('targetValue')
      });

      campaign.save().then(function() {
        alert('Campaing scheduled');
      }).catch(function() {
        alert('Error while scheduling the campaign');
      });
    }
  }
});