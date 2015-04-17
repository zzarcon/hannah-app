import Ember from "ember";
import DS from "ember-data";

var alias = Ember.computed.alias;

export default DS.Model.extend({
  username: DS.attr('string'),
  bio: DS.attr('string'),
  website: DS.attr('string'),
  activeCampaigns: DS.attr('number'),
  impersonable: DS.attr('boolean'),

  //TODO: Remove this, define adapter property for get proper keys
  profilePicture: function() {
    return this.get('profile_picture') || this.get('data.profile_picture');
  }.property(),
  created_at: DS.attr('date'),
  fullName: alias('full_name'),
  createdAt: alias('created_at'),
  registeredAt: alias('registered_at'),
  isAdmin: alias('is_admin'),
  initialCounts: alias('initial_counts'),
  currentCounts: alias('current_counts'),
  subscription_expires_at: DS.attr('date'),
  subscriptionExpiresAt: alias('subscription_expires_at'),
  isRegistered: Ember.computed.bool('createdAt'),
  isClean: Ember.computed.not('isDirty'),

  subscriptionExpiresIn: function() {
    return moment(this.get('subscriptionExpiresAt')).fromNow();
  }.property('subscriptionExpiresAt'),

  isExpired: function() {
    return this.get('subscriptionExpiresAt') < new Date();
  }.property('subscriptionExpiresAt')
});