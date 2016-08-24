import Ember from 'ember';

export default Ember.Route.extend({
  userAuth: Ember.inject.service(),
  actions:  {
    sellNewItem(params) {
      var newItem = this.store.createRecord('item', params);
      var user = params.user;
      console.log(params.user);
      user.get('items').addObject(newItem);
      newItem.save().then(function(){
        return user.save();
      });
    }
  }
});
