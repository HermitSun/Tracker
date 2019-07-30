import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    create() {
      this.get('model.sighting')
        .save()
        .then(() => {
          this.transitionToRoute('sightings');
        })
    },
    cancel() {
      this.get('model.sighting').deleteRecord();
      this.transitionToRoute('sightings');
    }
  }
});
