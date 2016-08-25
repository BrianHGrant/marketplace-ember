import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  userAuth: Ember.inject.service(),

  actions: {
    logOut(){
      this.set('userAuth.authUser', []);
      this.set('userAuth.ifAuth', false);
      this.transitionTo('index');
    }
  }
});
