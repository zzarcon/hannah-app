import Ember from "ember";
import DS from "ember-data";

export default DS.Model.extend({
  attribution: DS.attr(),
  filter: DS.attr('string'),
  createdTime: DS.attr(),
  caption: DS.attr(),
  from: DS.attr(),
  images: DS.attr('object'),
  link: DS.attr('string'),
  tags: DS.attr(),
  type: DS.attr('string'),
  userHasLiked: DS.attr('boolean'),
  usersInPhoto: DS.attr('object'),
  comments: DS.attr('object'),
  likes: DS.attr('object'),
  user: DS.attr('object'),
  location: DS.attr(),

  bigPicture: Ember.computed.alias('images.standardResolution.url'),
  smallPicture: Ember.computed.alias('images.lowResolution.url'),

  createdAt: function() {
    return moment(this.get('createdTime') * 1000).fromNow();
  }.property('createdTime')
});