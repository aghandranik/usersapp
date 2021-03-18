import Vue from "vue";
import App from "./App.vue";
import Paginate from 'vuejs-paginate'
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import 'bootstrap/dist/js/bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import _ from 'lodash';
import User from './components/User'
import UserProfile from './components/UserProfile'


Vue.config.productionTip = false;

Vue.component('paginate', Paginate)
Vue.component('User', User)
Vue.component('UserProfile', UserProfile)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
