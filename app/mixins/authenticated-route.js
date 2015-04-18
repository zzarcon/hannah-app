import Ember from "ember";

export default Ember.Mixin.create({
  beforeModel: function() {
    
    if (this.get('needsAuthentication') && !this.get('session.isLogged')) {
      this.replaceWith('login');
    }
  }
});