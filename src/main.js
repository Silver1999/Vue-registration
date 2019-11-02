import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import * as firebase from "firebase";
import store from "./store";

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyCNoU3IXrQ58aE0vaWxyMac_b-DwLNKfgU",
  authDomain: "invertible-hue-257715.firebaseapp.com",
  databaseURL: "https://invertible-hue-257715.firebaseio.com",
  projectId: "invertible-hue-257715",
  storageBucket: "invertible-hue-257715.appspot.com",
  messagingSenderId: "51686658996",
  appId: "1:51686658996:web:9559ebac52a0b5cd9518e1",
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
