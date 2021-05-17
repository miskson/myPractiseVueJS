<template>
  <div id="app">
    <h1>{{title}}</h1>
    <Ulttitle></Ulttitle>
    <List></List>
  </div>
</template>

<script>
//local component import
import List from './components/List';
export default {
  //local component registration
  components: {
    'List': List
  },
  data() {
    return {
      title: "my application"
    }
  }
  
}
</script>

<!-- styles-->
<style>

</style>
