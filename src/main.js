import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/main.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import store from "./store";
// import { mapState } from "vuex";
// import api from "./http.js";
// Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// api.getCurPosition().then(res => { 
//   console.log(res);
// })