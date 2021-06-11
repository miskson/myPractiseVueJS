<template>
  <div id="app">
    <MySlot>
      <h2 slot="title2">Title iside MySlot</h2>
      <p slot="text">Text inside MySlot</p>
    </MySlot>
  </div>
</template>


<script>
import MySlot from './components/MySlot.vue'

export default {
  components: {
    MySlot,
  } 
}
</script>

<style>

</style>
