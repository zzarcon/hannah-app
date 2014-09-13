import DS from "ember-data";
import Ember from 'ember';

export default DS.ActiveModelAdapter.extend({
  host: MediaGramENV.host,
  namespace: 'api',
  bulkCommit: true,
  pathForType: function(type) {
    var underscored = Ember.String.underscore(type);
    return Ember.String.pluralize(underscored);
  }
});