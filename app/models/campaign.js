import Ember from "ember";
import DS from "ember-data";

export default DS.Model.extend({
  action: DS.attr('string', {defaultValue: 'likeHashtagPhotos'}),
  target: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  likes: DS.attr('number', {defaultValue: 20}),

  canBeSaved: Ember.computed.and('validTarget', 'action', 'isDirty', 'validLikes'),
  canBeDeleted: Ember.computed.not('isNew'),
  isTargetDisabled: Ember.computed.equal('action', 'likePopularPhotos'),
  isGeolocation: Ember.computed.equal('action', 'geolocation'),
  validCoords: Ember.computed.not('invalidCoords'),
  latitude: Ember.computed.alias('geolocation.latitude'),
  longitude: Ember.computed.alias('geolocation.longitude'),

  validLikes: function() {
    return this.get('likes') > 0 && this.get('likes') <= 100;
  }.property('likes'),

  validTarget: function() {
    return this.get('target') ? true : this.get('isTargetDisabled');
  }.property('target', 'isTargetDisabled'),

  invalidCoords: function() {
    var coords = this.get('target') ? this.get('target').split(',') : [];
    return this.get('action') !== 'geolocation' || coords.length < 2;
  }.property('action', 'target'),

  geolocation: function() {
    if (this.get('action') !== 'geolocation' || this.get('invalidCoords')) {
      return;
    }

    var coords = this.get('target').split(',');
    return {
      latitude: coords[0],
      longitude: coords[1]
    };
  }.property('invalidCoords', 'action'),

  resetTarget: function() {
    if (this.get('isTargetDisabled') || this.get('invalidCoords')) {
      this.set('target', null);
    }
  }.observes('isTargetDisabled', 'invalidCoords')
});