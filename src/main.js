import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

import {router} from './routes'
import {store} from './store/Store'

Vue.use(VueResource);


new Vue({
  store: store,
  el: '#app',
  render: h => h(App),
  router: router
});
