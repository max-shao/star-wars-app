// PROJECT: MAIN
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store.js";

// PROJECT: OTHER
import axios from "axios";

import vuetify from "./plugins/vuetify";

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

// VUE INSTANCE
new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
