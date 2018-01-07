import Vue from 'vue'
import App from './App'
import router from './router'
// eslint-disable-next-line
import bulma from 'bulma'
import firebase from 'firebase'
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false

Vue.use(VeeValidate)

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBvt_MUehWwK6dLSyVqDJJhOTHyc1V24Ck',
  authDomain: 'nexocharge.firebaseapp.com',
  databaseURL: 'https://nexocharge.firebaseio.com',
  projectId: 'nexocharge',
  storageBucket: 'nexocharge.appspot.com',
  messagingSenderId: '663628999730'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
