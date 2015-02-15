import DS from "ember-data";
import Ember from 'ember';
import config from 'media-gram/config/environment';

export default DS.ActiveModelAdapter.extend({
  host: config.host,
  namespace: 'api',
  bulkCommit: true,
  pathForType: function(type) {
    var underscored = Ember.String.underscore(type);
    return Ember.String.pluralize(underscored);
  }
});