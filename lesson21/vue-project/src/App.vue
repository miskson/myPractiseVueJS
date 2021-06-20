<template>
  <div id="app">
    <h1>{{title}}</h1>
    <h2>{{value}}</h2>
    <button @click="toLog">CLICK ME!</button>
    <h3>{{text | to-upper}}</h3>
    <input type="text" placeholder="input to see text" v-model="text">
    <TestComponent/>
  </div>
</template>

<script>
import TestComponent from './components/TestComponent.vue'
import testMixin from './mixins/testMixin'

export default {
  name: 'App',

  components: {
    TestComponent,
  },

  data() {
    return {
      title: 'vue.js mixins',
      value: 'click',
      text: '',
    }
  },

  mixins: [testMixin],

}
</script>

<style>

  #app h1 {
    text-align: center;
    background-color: cyan;
    color: yellow;
    text-shadow: 1px 1px 5px mediumorchid;
  }
</style>
