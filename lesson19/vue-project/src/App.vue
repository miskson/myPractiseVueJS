<template>
  <div id="app">
    <Header/>
    <List v-bind:listElem = 'listElem' @listAdd = "displayMessage"/>
  </div>
</template>

<script>
import List from "./components/List";
import Header from "./components/Header";


export default {
  

  name: 'App',
  components: {
    List,
    Header,
  },

  data () {
    return {
      listElem: ['elem1', 'elem2', 'elem3', 'elem4', 'elem5'],
    }
  },

  methods: {
    displayMessage: function (message) {
      this.listElem.push(message)
    }
  }
}
</script>

<style>

</style>
