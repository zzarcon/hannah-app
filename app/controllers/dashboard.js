import Ember from "ember";

export default Ember.ObjectController.extend({
  likedMedia: function() {
    return this.get('store').find('media', {liked: true});
  }.property()
});