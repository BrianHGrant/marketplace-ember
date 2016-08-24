import Ember from 'ember';
export default Ember.Component.extend({
  userAuth: Ember.inject.service(),
  actions:{
    sellNewItem(){
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        category: this.get('category'),
        price: this.get('price'),
        user: this.get('userAuth').authUser[0]
      };
      console.log(params.user);
    this.sendAction('sellNewItem', params);
    }
  }
});
