// PROJECT: MAIN
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store.js";
// PROJECT: OTHER
import axios from "axios";

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

// VUE INSTANCE
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
