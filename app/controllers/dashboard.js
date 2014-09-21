import Ember from "ember";

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

  selectedAction: Ember.computed.defaultTo('availableActions.firstObject'),
  targetValue: "tattoos",

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

      campaign.save();
    }
  }
});