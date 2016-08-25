import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.route('shopping-cart');
  this.route('new-item');
  this.route('item', {path: '/item/:item_id'});
  this.route('logout');
});

export default Router;
