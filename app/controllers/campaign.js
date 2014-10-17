import Ember from "ember";
/* global moment, sweetAlert, swal*/

export default Ember.ObjectController.extend({
  likesExceded: Ember.computed.alias('parentController.likesExceded'),

  createdAgo: function() {
    return moment(this.get('createdAt')).fromNow();
  }.property('createdAt'),

  updatedAgo: function() {
    return moment(this.get('updatedAt')).fromNow();
  }.property('updatedAt'),

  actions: {
    saveCampaign: function() {
      var campaign = this.get('content');

      if (!campaign.get('canBeSaved')) {
        sweetAlert("Error", "The campaign don't have all required properties", "error");
        return;
      }

      if (this.get('likesExceded')) {
        sweetAlert("Error", "You can't exceed the limit of 100 likes per hour", "error");
        return;
      }

      campaign.save().then(function() {
        swal("Success", "Campaing saved", "success");
      }).catch(function() {
        sweetAlert("Error", "Error while creating the campaign", "error");
      });
    },

    deleteCampaign: function() {
      swal({
        title: "Are you sure?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes",
        closeOnConfirm: false
      }, function() {
        this.get('content').destroyRecord();
      }.bind(this));
    }
  }
});