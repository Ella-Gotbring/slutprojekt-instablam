import Vue from 'vue'
import App from './App.vue'

Vue.prototype.online = window.navigator.onLine;
Vue.prototype.createObjectURL = window.URL.createObjectURL;
Vue.prototype.Caman = window.Caman;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

