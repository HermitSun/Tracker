import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    this.transitionTo('sightings');
  },
  setupController(controller, model) {
    this._super(controller, model);
  }
});
