import {
  // searchDictionary,
  seeLabel,
  dateFmt,
  currencyFmt,
  dealNumber,
  isAuth,
  clearLoginInfo
} from './utils'

import constant from './constant'

import http from './httpRequest'

// import storage from 'good-storage'

export default {
  install(Vue) {
    // Vue.prototype.$getWord = searchDictionary;
    Vue.prototype.$dateFilter = dateFmt;
    Vue.prototype.$CONSTANT = constant;
    Vue.prototype.$currency = currencyFmt;
    Vue.prototype.$seeLabel = seeLabel;
    Vue.prototype.$dealNumber = dealNumber;
    Vue.prototype.isAuth = isAuth;
    Vue.prototype.$clearLoginInfo = clearLoginInfo;
    Vue.prototype.$http = http;
    // Vue.prototype.$storage = storage;

    // Vue.filter('getLabel', searchDictionary);
    Vue.filter('seeLabel', seeLabel);
    Vue.filter('currency', currencyFmt);
    Vue.filter('dateFilter', dateFmt);
  }
}
