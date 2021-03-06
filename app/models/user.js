import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  email: DS.attr(),
  phone: DS.attr(),
  items: DS.hasMany('item', { async: true}),
  cart: DS.belongsTo('cart', { async: true})
});
