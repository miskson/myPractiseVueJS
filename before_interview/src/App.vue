<template>
  <div id="app">
    <Exchanger/>
    <!--<MessagePopup/>-->
    <router-view/>
  </div>
</template>

<script>
import Exchanger from './components/Exchanger.vue';
import MessagePopup from './components/MessagePopup.vue'

export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    Exchanger,
    MessagePopup,
  }
}
</script>

<style>

</style>
