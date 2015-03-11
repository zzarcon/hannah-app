import Ember from "ember";
import DS from "ember-data";

export default DS.Model.extend({
  username: DS.attr('string'),
  bio: DS.attr('string'),
  website: DS.attr('string'),
  profilePicture: DS.attr('string'),
  fullName: DS.attr('string'),
  activeCampaigns: DS.attr('number'),

  //TODO: Improve this
  registeredAt: Ember.computed.alias('registered_at'),
  isAdmin: Ember.computed.alias('is_admin'),
  initialCounts: Ember.computed.alias('initial_counts'),
  currentCounts: Ember.computed.alias('current_counts'),

  isRegistered: Ember.computed.bool('registeredAt')
});