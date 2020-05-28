import Vue from 'vue'
import App from './App.vue'

Vue.prototype.online = window.navigator.onLine;
Vue.prototype.createObjectURL = window.URL.createObjectURL;
Vue.prototype.Caman = window.Caman;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./sw.js")
      .then(() => {
        console.log("register sw")

      })
      .catch((error) => {
        console.log("error with register sw", error);

      })
  }
}

registerServiceWorker();