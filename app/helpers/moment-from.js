import {helper} from '@ember/component/helper';
import {htmlSafe} from '@ember/template';

export default helper(function momentFrom(params) {
  const time = window.moment(...params);
  const formatted = time.format('dddd MMM DD, YYYY'); // format likes Sunday May 31, 2016
  return htmlSafe(
    `<span class="text-primary">${formatted}</span>`
  );
});
