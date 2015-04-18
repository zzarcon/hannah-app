import Ember from "ember";
import DS from "ember-data";

var alias = Ember.computed.alias;
var attr = DS.attr;

export default DS.Model.extend({
  username: attr('string'),
  bio: attr('string'),
  website: attr('string'),
  activeCampaigns: attr('number'),
  impersonable: attr('boolean'),
  createdAt: attr('date'),
  fullName: attr('string'),
  registeredAt: attr('date'),
  isAdmin: attr('boolean'),
  initialCounts: attr(),
  currentCounts: attr(),
  counts: attr(),
  subscriptionExpiresAt: attr('date'),
  profilePicture: attr('string'),
  email: DS.attr('string'),
  
  isRegistered: Ember.computed.bool('createdAt'),
  isClean: Ember.computed.not('isDirty'),

  subscriptionExpiresIn: function() {
    return moment(this.get('subscriptionExpiresAt')).fromNow();
  }.property('subscriptionExpiresAt'),

  isExpired: function() {
    return this.get('subscriptionExpiresAt') < new Date();
  }.property('subscriptionExpiresAt'),

  registeredAtDate: function() {
    return moment(this.get('registeredAt')).fromNow();
  }.property('registeredAt')
});