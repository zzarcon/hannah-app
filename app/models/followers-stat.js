import Ember from "ember";
import DS from "ember-data";

export default DS.Model.extend({
  date: DS.attr('date'),
  stat: DS.attr('number')
});

