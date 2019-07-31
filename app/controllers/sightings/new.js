import Controller from '@ember/controller';
import {alias} from '@ember/object/computed';

export default Controller.extend({
  sighting: alias('model.sighting'),
  witnessList: [],
  actions: {
    create() {
      const store = this.get('sighting');
      store.set('witnesses', this.witnessList);
      if (store.get('hasDirtyAttributes')) {
        store.save()
          .then(() => {
            this.transitionToRoute('sightings');
            this.witnessList = [];
          });
      }
    },
    cancel() {
      this.get('sighting').deleteRecord();
      this.transitionToRoute('sightings');
    },
    didMakeCryptidSelection(value) {
      this.get('sighting').set('cryptid', value);
    },
    addWitness(value) {
      console.log('add');
      this.set('witnessList', value);
    },
    removeWitness(index) {
      this.set('witnessList', this.witnessList.filter(((value, id) => id !== index)));
    }
  }
});
