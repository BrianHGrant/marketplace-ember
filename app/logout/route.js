import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  userAuth: Ember.inject.service(),

  actions: {
    logOut(){
      var params = {
        items: this.get("shoppingCart.items"),
        user: this.get('userAuth.authUser')[0]
      };
      var newCart = this.store.createRecord('cart', params);
      console.log(newCart);
      newCart.save().then(function(){
        params.user.save();
      });
      this.set('userAuth.authUser', []);
      this.set('userAuth.ifAuth', false);
      this.set('shoppingCart.items', []);
      this.transitionTo('index');
    }
  }
});


// this.get(shoppingCart.items)
