import Ember from "ember";
import DS from "ember-data";

export default DS.ActiveModelSerializer.extend({
  serializeHasMany: function(record, json, relationship) {
    var key = relationship.key;
    var json_key = key.singularize().decamelize() + '_ids';

    var relationshipType = DS.RelationshipChange.determineRelationshipType(
      record.constructor, relationship);

    if (relationshipType === 'manyToNone' || relationshipType === 'manyToMany' || relationshipType === 'manyToOne') {
      json[json_key] = Ember.get(record, key).mapBy('id');
    }
  },

  /**
   * Tells DS how to find the key for the attribute in the Api
   * @param  {String} attr
   * @return {String}
   */
  keyForAttribute: function(attr) {
    return attr.underscore();
  }
});