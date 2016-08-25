import Ember from 'ember';

export default Ember.Service.extend({
  authUser: [],
  ifAuth: false,

  login(user) {
    this.set('authUser', [user]);
    this.set('ifAuth', true);
    console.log(this.get('authUser')[0]);
  }
});
