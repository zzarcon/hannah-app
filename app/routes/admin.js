import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    //TODO: Uncoment this when the Api return all users
    //return this.get('store').find('admin');
  }
});