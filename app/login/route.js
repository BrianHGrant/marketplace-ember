import Ember from 'ember';
export default Ember.Route.extend({
  model() {
    return this.store.findAll('user');
  },
  userAuth: Ember.inject.service(),
  actions: {
    loginUser(params) {
      var currentUser;
      var users = this.currentModel;
      users.forEach(function(user) {
        if(user._internalModel._data.email === params.email) {
          currentUser = user._internalModel._data;
        }
      });
      if(currentUser){
        this.get('userAuth').login(currentUser);
        this.transitionTo('index');
      } else {
        alert("User Not Found");
      }
    }
  }
});
