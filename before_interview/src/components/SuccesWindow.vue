<template>
  <div class="container">
    <div class="inner-window">
      <h1>Success window be like</h1>
      <p>You've successfully exchanged {{this.info.amount}} UAH to {{this.info.exchanged}} {{this.info.current}}</p>
      <button @click="closePopup">CLOSE</button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isOpened: true,
        }
    },

    props: ['info'],

    methods: {
        closePopup: function () {
            this.isOpened = false;
            this.$emit('getPopupStatus', this.isOpened);
        }
    }
    
}
</script>

<style scoped>
  .container {
    position: fixed;
    color: red;
    z-index: 1;
    width: 100%;
    height: 100%;
    margin: 0;
    background-color: #0400009c;
    top: 0;
    left: 0;
  }

  .inner-window {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .inner-window h1, p {
      background-color: black;
      color: white;
      padding: 10px;
      border: 5px double white;
      border-color: aquamarine;
  }
</style>