import Ember from "ember";
import DS from "ember-data";

export default DS.Model.extend({
  action: DS.attr('string', {defaultValue: 'likeHashtagPhotos'}),
  target: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),

  canBeSaved: Ember.computed.and('target', 'isDirty'),
  canBeDeleted: Ember.computed.not('isNew')
});