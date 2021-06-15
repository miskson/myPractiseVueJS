<template>
  <div id="app">
    <h1>{{title | to-uppercase}}</h1>
    <h3>input affects title. title has to-uppercase global filter.</h3>
    <input type="text" v-model="title">
    <h3>this input affects text. text has to-lowercase local filter</h3>
    <input type="text" v-model="text">
    <p>{{text | to-lowercase}}</p>
   
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return{
      title: 'THE TITILE',
      text: 'TO LOWER LO LOWER TO LOWER TO LOVER TO LOWWWWER'
    }
  },

  filters: {
    'to-lowercase': function(value) {
      return value.toLowerCase();
    }
  }
  
}
</script>

<style>

</style>
