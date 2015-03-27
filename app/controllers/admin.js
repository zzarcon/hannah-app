import Ember from 'ember';

export default Ember.ObjectController.extend({
  usersSort: ['activeCampaigns:desc', 'username'],
  users: function() {
    return this.get('store').all('user');
  }.property(),

  //Only show registered users in the section
  impersonableUsers: Ember.computed.filterBy('users', 'impersonable', true),
  activeUsers: Ember.computed.filterBy('impersonableUsers', 'isExpired', false),
  sortedUsers: Ember.computed.sort('impersonableUsers', 'usersSort'),

  totalCampaigns: function() {
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