import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  price: DS.attr(),
  category: DS.attr(),
  user: DS.belongsTo('user', { async: true })
});
