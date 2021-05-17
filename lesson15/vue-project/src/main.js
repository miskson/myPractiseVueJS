// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//global component import
import UltimateTitle from './components/UltimateTitle'

Vue.config.productionTip = false

//component registration
Vue.component('Ulttitle', UltimateTitle)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
