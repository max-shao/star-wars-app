// PROJECT: MAIN
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// PROJECT: OTHER
import axios from "axios";

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

// VUE INSTANCE
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
