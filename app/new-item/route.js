import Ember from 'ember';
export default Ember.Route.extend({
  userAuth: Ember.inject.service(),
  actions:  {
    sellNewItem(params) {
      var newItem = this.store.createRecord('item', params);
      console.log(this.get('userAuth.userId'));
      var user = this.store.findRecord('user', this.get('userAuth.userId'));
      console.log(this.store.findRecord('user', this.get('userAuth.userId')));
      user.get('items').addObject(newItem);
      newItem.save().then(function(){
        return user.save();
      });
    }
  }
});
