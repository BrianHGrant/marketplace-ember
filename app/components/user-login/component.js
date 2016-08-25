import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    loginUser() {
      var params = {
        email: this.get("email")
        // email: 'matthew',
      };
      this.sendAction('loginUser', params);
    }
  }
});
