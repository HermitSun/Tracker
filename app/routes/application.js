import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    flash(data) {
      this.controller.get('alerts')
        .pushObject(data);
    }
  }
});
