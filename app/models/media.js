import Ember from "ember";
import DS from "ember-data";

export default DS.Model.extend({
  attribution: DS.attr(),
  filter: DS.attr('string'),
  caption: DS.attr(),
  from: DS.attr(),
  images: DS.attr('object'),
  link: DS.attr('string'),
  tags: DS.attr(),
  type: DS.attr('string'),
  userHasLiked: DS.attr('boolean'),
  location: DS.attr(),
  // user: DS.belongsTo('user')

  bigPicture: Ember.computed.alias('images.standardResolution.url'),
  smallPicture: Ember.computed.alias('images.lowResolution.url')
});