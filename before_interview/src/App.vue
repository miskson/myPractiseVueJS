<template>
  <div id="app">
    <Exchanger @getInfo = "recieveInfo($event)"/>

    <div v-if="isLoading">
      <component :is="info.componentToCall" @getStatus="recieveStatus"></component>
    </div>

    <SuccesWindow v-if="callSucces" :info='info' @getPopupStatus = "recievePopupStatus($event)"/>
  </div>
</template>

<script>
import Exchanger from './components/Exchanger.vue'
import MessagePopup from './components/MessagePopup'
import SuccesWindow from './components/SuccesWindow'

export default {
  name: 'App',
  data() {
    return {
      info: {
        isDisabled: true,
        componentToCall: null,
      },
      isLoading: false,
      //transactionStatus: false,
      callSucces: false,
    }
  },

  components: {
    Exchanger,
    MessagePopup,
    SuccesWindow,
  },

  methods: {
    recieveInfo: function (opInfo) {
      this.info = opInfo;
      this.isLoading = true;
    },

    recieveStatus: function (transactionStatus) {
      //this.transactionStatus = transactionStatus;
      this.isLoading = false;
      this.callSucces = true;
    },

    recievePopupStatus: function (isOpened) {
      this.callSucces = isOpened;
    }
  },
}
</script>

<style>

</style>
