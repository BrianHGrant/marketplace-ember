import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  model(params) {
    return this.store.findRecord('item', params.item_id);
  },
  actions:  {
    addToCart(model) {
      this.get('shoppingCart').addToCart(model);
      console.log(this.get('shoppingCart.items'))
    }
  }
});
