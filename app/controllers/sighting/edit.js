import Controller from '@ember/controller';
import {alias} from '@ember/object/computed';

export default Controller.extend({
  sighting: alias('model.sighting'),
  sightingDate: new Date().toISOString(),
  actions: {
    update() {
      if (this.get('sighting').get('hasDirtyAttributes')) {
        this.get('sighting')
          .save()
          .then(() => {
            this.transitionToRoute('sightings');
          });
      }
    },
    cancel() {
      if (this.get('sighting').get('hasDirtyAttributes')) {
        this.get('sighting')
          .rollbackAttributes();
      }
      this.transitionToRoute('sightings');
    },
    delete() {
      if (window.confirm('Are you sure you want to delete this sighting?')) {
        this.get('sighting')
          .destroyRecord()
          .then(() => {
            this.transitionToRoute('sightings');
          })
      }
    },
    formatDate(id) {
      this.store.findRecord('sighting', id)
        .then((sight) => {
          sight.set('sightedAt', new Date(window.moment(this.sightingDate).format()));
          // 这里一定要确保是Date类型……不然会出奇怪的问题
        });
    }
  }
});
