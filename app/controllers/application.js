import Controller from '@ember/controller';
import ArrayProxy from '@ember/array/proxy';
import {capitalize} from '@ember/string';
import {set} from '@ember/object';

export default Controller.extend({
  showSightings: true,
  showCryptids: true,
  showWitnesses: true,
  showCustom: true,

  alerts: ArrayProxy.create({
    content: [],
    objectAtContent: function (idx) {
      const obj = this.get('content').objectAt(idx);
      set(obj, 'alertType', 'alert-' + obj.type);
      set(obj, 'title', capitalize(obj.type));
      console.log(obj);
      return obj;
    }
  }),
  actions: {
    toggleCustom() {
      this.set('showCustom', !this.get('showCustom'));
    }
  }
});
