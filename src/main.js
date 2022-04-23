import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import './plugins/element.js';
import './assets/less/index.less'

import router from '../router'
import store from '../store'
import http from 'axios'
import globals from '../Global'

Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.prototype.$http = http
Vue.prototype.$myContent = globals;
// Vue.prototype.$global = 23

new Vue({
  router,
  store,
  data() {
    return {
      meng: "123"
    }
  },
  render: h => h(App),
}).$mount('#app')

localStorage.setItem("lastname", "Smith");
