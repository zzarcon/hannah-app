import DS from "ember-data";

export default DS.Model.extend({
  actionName: DS.attr('string'),
  target: DS.attr('string')
});