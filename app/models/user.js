import Ember from "ember";
import DS from "ember-data";

export default DS.Model.extend({
  username: DS.attr('string'),
  bio: DS.attr('string'),
  website: DS.attr('string'),
  profilePicture: DS.attr('string'),
  fullName: DS.attr('string'),
  activeCampaigns: DS.attr('number'),
  impersonable: DS.attr('boolean'),

  //TODO: Improve this
  created_at: DS.attr('date'),
  createdAt: Ember.computed.alias('created_at'),
  registeredAt: Ember.computed.alias('registered_at'),
  isAdmin: Ember.computed.alias('is_admin'),
  initialCounts: Ember.computed.alias('initial_counts'),
  currentCounts: Ember.computed.alias('current_counts'),
  subscription_expires_at: DS.attr('date'),
  subscriptionExpiresAt: Ember.computed.alias('subscription_expires_at'),

  subscriptionExpiresIn: function() {
    return moment(this.get('subscriptionExpiresAt')).fromNow();
  }.property('subscriptionExpiresAt'),

  isRegistered: Ember.computed.bool('createdAt')
});