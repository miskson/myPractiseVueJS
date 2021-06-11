// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Form1 from './components/Form1'
import Form2 from './components/Form2'


Vue.config.productionTip = false

Vue.component('Form1', Form1)
Vue.component('Form2', Form2)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
