import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';

Vue.config.productionTip = false
import './../node_modules/bulma/css/bulma.min.css'

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
