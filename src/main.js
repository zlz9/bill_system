import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// 引入element ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8081";
Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
