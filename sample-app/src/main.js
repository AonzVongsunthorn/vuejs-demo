import Vue from 'vue';
import App from './components/App.vue';
import VueRouter from 'vue-router';

import Dashborad from './components/Dashboard.vue'
import SignIn from './components/Signin.vue'
import SignUp from './components/Signup.vue'
import store from './store';
import { firebaseApp } from "./firebaseApp";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './css/styles.css'

Vue.use(VueRouter);
// import BootstrapVue from 'bootstrap-vue';
// Vue.use(BootstrapVue);



const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      component: Dashborad
    },
    {
      path: '/signin',
      component: SignIn
    },
    {
      path: '/signup',
      component: SignUp
    }
  ]
});

firebaseApp.auth().onAuthStateChanged(user => {

  if(user) {
    store.dispatch('signIn', user);
    router.push('/dashboard');
  } else {
    router.push('/signin');
  }

});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
