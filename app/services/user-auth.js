import Ember from 'ember';

export default Ember.Service.extend({
  authUser: [],

  login(user) {
    this.get('authUser').empty
    this.get('authUser').pushObject(user);
    console.log(this.get('authUser')[0]);
  }
});
