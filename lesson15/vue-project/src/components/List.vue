<template>
  <ul>
      <li v-for="person in people">{{person}}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      people: ["Seroga","Slavon","Dimon"],
    }
  }
}
</script>

<!-- styles-->
<style>

</style>
