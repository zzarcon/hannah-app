import Ember from 'ember';
import SortableController from "../mixins/sortable-controller";

export default Ember.ArrayController.extend(SortableController, {
  sortProperties: ['activeCampaigns:desc', 'username'],
  
  //Only show registered users in the section
  // impersonableUsers: Ember.computed.filterBy('users', 'impersonable', true),
  activeUsers: Ember.computed.filterBy('impersonableUsers', 'isExpired', false),
  // sortedUsers: Ember.computed.sort('impersonableUsers', 'usersSort'),

  model: function() {
    return this.get('store').all('user');
  }.property(),

  _totalCampaigns: function() {
    return this.get('impersonableUsers').mapBy('activeCampaigns').reduce(function(prev, current) {
      return prev + current;
    });
  }.property('impersonableUsers.length'),

  actions: {
    save: function(user) {
      if (!user) {
        return;
      }

      user.save().then(function() {
        swal("Success", "User saved", "success");
      }).catch(function() {
        sweetAlert("Error", "The cant be saved", "error");
      });
    }
  }
});