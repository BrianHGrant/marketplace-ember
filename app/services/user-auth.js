import Ember from 'ember';

export default Ember.Service.extend({
  authUser: [],
  ifAuth: false,
  userId: '',
  saveUserId(id)  {
    this.set('userId', id);
    console.log(this.get('userId'));
  },
  login(user) {
    this.get('authUser').empty
    this.get('authUser').pushObject(user);
    this.set('ifAuth', true);
    console.log(this.get('authUser')[0]);
  }
});
