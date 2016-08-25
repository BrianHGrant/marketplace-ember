import Ember from 'ember';
export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      carts: this.store.findAll('cart'),
      items: this.store.findAll('item')
    })
  },
  userAuth: Ember.inject.service(),
  shoppingCart: Ember.inject.service(),
  actions: {
    loginUser(params) {
      var currentUser;
      var users = this.get("currentModel.users");
      users.forEach(function(user) {
        if(user.get('email') === params.email) {
          currentUser = user;
        }
      });
      if(currentUser){
        this.get('userAuth').login(currentUser);
        console.log(currentUser.get("cart"));
        debugger;
        this.set('shoppingCart.items', currentUser.get("cart.items"));
        this.transitionTo('index');
      } else {
        alert("User Not Found");
      }
    }
  }
});
// currentUser.get('cart').get('id') gets the cart id
