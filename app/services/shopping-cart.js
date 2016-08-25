import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  totalCost: 0,
    addToCart(item) {
    console.log(this.get('totalCost'));
    this.get('items').pushObject(item);
    var price = this.get('totalCost');
    console.log(this.get('items'));
    price += item.get('price');
    this.set('totalCost', price);
    console.log(this.get('totalCost'));
  },
  removeFromCart(item)  {
    this.get('items').removeObject(item);
    var price = this.get('totalCost')
    price -= item.get('price');
    this.set('totalCost', price);
  }
});
