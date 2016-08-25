import Ember from 'ember';
export default Ember.Route.extend({
  model() {
    return this.store.findAll('user');
  },
  userAuth: Ember.inject.service(),
  actions: {
    loginUser(params) {
      var currentUser;
      var userId;
      var users = this.get('currentModel');
      console.log(users);
      users.forEach(function(user) {
        if(user._internalModel._data.email === params.email) {
          userId = user._internalModel.id;
          currentUser = user._internalModel._data;
        }
      });
      if(currentUser){
        this.get('userAuth').saveUserId(userId);
        this.get('userAuth').login(currentUser);
        this.transitionTo('index');
      } else {
        alert("User Not Found");
      }
    }
  }
});
