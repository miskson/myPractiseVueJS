<template>
  <div id="app">
    <List v-bind:listElem = 'listElem'/>
  </div>
</template>

<script>
import List from './components/List';

export default {
  

  name: 'App',
  components: {
    List,
  },
  data () {
    return {
      listElem: ['elem1', 'elem2', 'elem3', 'elem4', 'elem5'],
    }
  }
}
</script>

<style>

</style>
