import Ember from "ember";
import DS from "ember-data";

export default DS.Model.extend({
  action: DS.attr('string', {defaultValue: 'likeHashtagPhotos'}),
  target: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  likes: DS.attr('number', {defaultValue: 20}),

  validLikes: function() {
    return this.get('likes') > 0 && this.get('likes') <= 100;
  }.property('likes'),

  canBeSaved: Ember.computed.and('target', 'action', 'isDirty', 'validLikes'),
  canBeDeleted: Ember.computed.not('isNew')
});