import Ember from "ember";

export default Ember.ObjectController.extend({
  initialCounts: Ember.computed.alias('session.user.initialCounts'),
  currentCounts: Ember.computed.alias('session.user.currentCounts'),
});