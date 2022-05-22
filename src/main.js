import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
import MaterialKit from "./plugins/material-kit";

Vue.config.productionTip = false;

Vue.use(MaterialKit);
import ElementUI from 'element-ui'
import 'assets/element-variables.scss'

Vue.use(ElementUI)

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
