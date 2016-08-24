import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    createNewUser(){
      var params = {
        name: this.get('name'),
        email: this.get('email'),
        phone: this.get('phone')
      };
    this.sendAction('createNewUser', params);
    }
  }
});
