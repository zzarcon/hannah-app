import Ember from 'ember';
import SortableController from "../mixins/sortable-controller";

export default Ember.ArrayController.extend(SortableController, {
  sortProperty: 'subscriptionExpiresAt',
  sortAscending: false,

  //Only show registered users in the section
  impersonableUsers: Ember.computed.filterBy('@this', 'impersonable', true),
  activeUsers: Ember.computed.filterBy('impersonableUsers', 'isExpired', false),

  model: function() {
    return this.get('store').all('user');
  }.property(),

  activeCampaigns: function() {
    return this.get('activeUsers').mapBy('activeCampaigns').reduce(function(prev, current) {
      return prev + current;
    });
  }.property('impersonableUsers.length'),

  actions: {
    save: function(user) {
      if (!user) {
        return;
      }

      user.save().then(function() {
        window.swal("Success", "User saved", "success");
      }).catch(function() {
        window.sweetAlert("Error", "The cant be saved", "error");
      });
    }
  }
});