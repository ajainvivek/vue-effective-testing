import Vue from 'vue'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from './router'

import Mint from 'mint-ui';
Vue.use(Mint);

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
