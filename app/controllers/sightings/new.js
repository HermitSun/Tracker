import Controller from '@ember/controller';
import {alias} from '@ember/object/computed';

export default Controller.extend({
  sighting: alias('model.sighting'),
  witnessList: [],
  alertCount: 0,
  actions: {
    create() {
      const store = this.get('sighting');
      store.set('witnesses', this.witnessList);
      if (store.get('hasDirtyAttributes')) {
        store.save()
          .then(() => {
            const count = this.get('alertCount');
            this.send('flash', {
              index: count,
              type: 'success',
              message: 'Sighted ' + window.moment(store.get('sightedAt')).fromNow() +
                ', at ' + store.get('location')
            });
            this.set('alertCount', count + 1);
            this.transitionToRoute('sightings');
            this.set('witnessList', []); // clear cache
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
      this.set('witnessList', value);
    },
    removeWitness(index) {
      this.set('witnessList', this.witnessList.filter(((value, id) => id !== index)));
    }
  }
});
