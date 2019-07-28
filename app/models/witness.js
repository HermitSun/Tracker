import Ember from 'ember';
import DS from 'ember-data';

const {Model} = DS;

export default Model.extend({
  fName: DS.attr('string'),
  lName: DS.attr('string'),
  email: DS.attr('string'),
  title: DS.attr('string', {defaultValue: 'the Superman'}),
  sightings: DS.hasMany('sighting'),
  fullName: Ember.computed('fName', 'lName', function () {
    return this.get('fName') + ' ' + this.get('lName');
  }),
  emailName: Ember.computed('fName', 'email', function () {
    return this.get('fName') + ' - ' + this.get('email');
  }),
  titleName: Ember.computed('lName', 'title', function () {
    return this.get('lName') + ', ' + this.get('title');
  })
});
