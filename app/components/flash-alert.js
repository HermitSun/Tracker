import Component from '@ember/component';

export default Component.extend({
  actions: {
    // 这里直接不用index了，用自带的removeObject好了；用index挺麻烦的
    removeAlert(alert) {
      this.get('alerts').removeObject(alert);
    },
  }
});
