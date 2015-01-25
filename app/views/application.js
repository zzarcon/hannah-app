import Ember from "ember";

export default Ember.View.extend({
  classNames: ['media-gram'],
  classNameBindings: ['session.isLogged:logged:not-logged']
});