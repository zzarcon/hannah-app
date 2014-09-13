import DS from "ember-data";

export default DS.Model.extend({
  username: DS.attr('string'),
  bio: DS.attr('string'),
  website: DS.attr('string'),
  profilePicture: DS.attr('string'),
  fullName: DS.attr('string')
});