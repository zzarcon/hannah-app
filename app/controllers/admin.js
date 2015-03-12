import Ember from 'ember';

export default Ember.ObjectController.extend({
  usersSort: ['activeCampaigns:desc', 'username'],
  users: function() {
    return this.get('store').all('user');
  }.property(),

  //Only show registered users in the section
  unsortedActiveUsers: Ember.computed.filterBy('users', 'impersonable', true),
  activeUsers: Ember.computed.sort('unsortedActiveUsers', 'usersSort')
});