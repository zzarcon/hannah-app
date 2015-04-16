import Ember from "ember";

function format(n) {
    return (n > 0 ? '+' : '') + n;
}

export default Ember.ArrayController.extend({
  sortProperties: ['date'],
  sortAscending: true,
  
  initialCounts: Ember.computed.alias('session.user.initialCounts'),
  currentCounts: Ember.computed.alias('session.user.currentCounts'),

  followingBalance: function() {
    return this.get('followingVariation') < 0 ? 'positive' : 'negative';
  }.property('followingVariation'),

  followersBalance: function() {
    return this.get('followersVariation') > 0 ? 'positive' : 'negative';
  }.property('followersVariation'),

  mediaVariation: function() {
    return format(this.get('currentCounts.media') - this.get('initialCounts.media'));
  }.property('initialCounts.media', 'currentCounts.media'),

  followersVariation: function() {
    return format(this.get('currentCounts.followers') - this.get('initialCounts.followers'));
  }.property('initialCounts.followers', 'currentCounts.followers'),

  followingVariation: function() {
    return format(this.get('currentCounts.following') - this.get('initialCounts.following'));
  }.property('initialCounts.following', 'currentCounts.following')
});