import {helper} from '@ember/component/helper';

export default helper(function getThumbnail(params) {
  const imgPath = params[0];
  if (!imgPath) {
    return 'assets/images/cryptids/blank_th.png';
  }
  return imgPath;
});
