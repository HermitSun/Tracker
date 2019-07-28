import DS from 'ember-data';

const {Model} = DS;

export default Model.extend({
  location: DS.attr('string'),
  createdAt: DS.attr('date'),
  sightedAt: DS.attr('date'),
  isNew: DS.attr('boolean', {defaultValue: false}),
  cryptid: DS.belongsTo('cryptid'),
  witnesses: DS.hasMany('witness')
});
