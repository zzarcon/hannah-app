import Ember from "ember";

export default Ember.Component.extend({
  action: 'sort',

  sortDirectionBinding: 'targetObject.sortAscending',
  sortPropertyBinding: 'targetObject.sortProperty',

  active: function(){
    return this.get('sortProperty') == this.get('sortBy');
  }.property('sortProperty'),

  tagName: 'th',
  sortBy: null,
  ascending: true,
  click: function(){
    this.sendAction('action', this.get('sortBy'),this.get('ascending') !== "false");
  }
});