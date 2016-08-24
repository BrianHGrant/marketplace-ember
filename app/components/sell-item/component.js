import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    sellNewItem(){
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        category: this.get('category'),
        price: this.get('price')
      };
    this.sendAction('sellNewItem', params);
    }
  }
});
