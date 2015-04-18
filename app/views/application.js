import Ember from "ember";

function isValidEmail(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

export default Ember.View.extend({
  classNames: ['media-gram'],
  classNameBindings: ['session.isLogged:logged:not-logged'],
  userEmail: Ember.computed.alias('session.user.email'),

  showEmailPrompt: function() {
    if (!this.get('session.user') || this.get('userEmail')) {
      return;
    }

    swal({
      title: "Your email is required",
      text: "Please, enter your email address:",
      type: "input",
      showCancelButton: true,
      closeOnConfirm: false,
      animation: "slide-from-top"
    }, function(email) {
      if (!isValidEmail(email)) {
        swal.showInputError("The email should be valid");
        return false;
      }

      this.set('userEmail', email);
      this.get('session.user').save();

      swal("Nice!", "Your email it's saved", "success");
    }.bind(this));
  }.on('didInsertElement')
});