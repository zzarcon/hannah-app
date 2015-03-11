import Ember from 'ember';

export default Ember.ObjectController.extend({
  users: function() {
    return this.get('store').all('user');
  }.property(),

  //Only show registered users in the section
  activeUsers: Ember.computed.filterBy('users', 'isRegistered', true)
});