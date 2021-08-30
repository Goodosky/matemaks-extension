import Vue from "vue";
import App from "./App.vue";
import VueCompositionAPI from "@vue/composition-api";

Vue.use(VueCompositionAPI);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: (h) => h(App),
});
