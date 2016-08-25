import Ember from 'ember';
export default Ember.Route.extend({
  userAuth: Ember.inject.service(),
  shoppingCart: Ember.inject.service(),
  actions:  {
    sellNewItem(params) {
      var newItem = this.store.createRecord('item', params);
      var currentAuthUser = this.get('userAuth.authUser');
      currentAuthUser[0].get('items').addObject(newItem);
      newItem.save().then(function(){
        currentAuthUser[0].save();
      });
      this.get("shoppingCart").addToCart(newItem);
    }
  }
});
