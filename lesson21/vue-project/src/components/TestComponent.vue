<template>
  <div id="container">
    <h1>{{title}}</h1>
    <h2>{{value | to-upper}}</h2>
    <button @click="toLog">CLICK ME!</button>
    <input type="text" v-model="value">
    <p>hello</p>
    
  </div>
</template>

<script>
import testMixin from '../mixins/testMixin'

export default {
  data() {
    return {
      title: 'component2',
      value: 'type smth',
    }
  },

  mixins: [testMixin],

}
</script>

<style>

  #container h1 {
    text-align: center;
    background-color: cyan;
    color: black;
    text-shadow: 4px 4px 5px mediumorchid;
  }
</style>
