import Ember from "ember";
import DS from "ember-data";

export default DS.Model.extend({
  registeredAt: Ember.computed.alias('registered_at'),
  username: DS.attr('string'),
  bio: DS.attr('string'),
  website: DS.attr('string'),
  profilePicture: DS.attr('string'),
  fullName: DS.attr('string'),
  isAdmin: Ember.computed.alias('is_admin'),
  activeCampaigns: DS.attr('number'),
  initialCounts: Ember.computed.alias('initial_counts'),
  currentCounts: Ember.computed.alias('current_counts')
});