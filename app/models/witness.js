import Ember from 'ember';
import DS from 'ember-data';

const {Model} = DS;

export default Model.extend({
  fName: DS.attr('string'),
  lName: DS.attr('string'),
  email: DS.attr('string'),
  sightings: DS.hasMany('sighting'),
  fullName: Ember.computed('fName', 'lName', function () {
    return this.get('fName') + ' ' + this.get('lName');
  })
});
