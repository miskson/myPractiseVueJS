<template>
  <div id="app">
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <div class="buttons">
      <button type="button" @click="component = 'Form1'">Register</button>
      <button type="Button" @click="component = 'Form2'">Log in</button>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return{
      component: 'Form1'
    }
  },
  
}
</script>

<style>
  .buttons {
    border: 1px solid black;
    display: block;
    width:  fit-content;
    padding: 10px;
    margin: 10px;
  }
  .buttons button {
    margin: 5px;
  }
</style>
