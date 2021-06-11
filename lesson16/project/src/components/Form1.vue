<template>
  <form action="post">
      <h1>form 1</h1>
      <p>Name:</p>
      <input type="text" name="Name" id="">
      <p>Number:</p>
      <input type="number" name="" id="">
      <p>E-mail:</p>
      <input type="mail" name="" id="">
      <button type="submit">Register</button>
  </form>
</template>

<script>


export default {
  
}
</script>

<style scoped>
   button {
       display: block;
       margin: 10px;
   }
   form {
       display: inline-block;
       border: 2px solid black;
       padding: 10px;
   }
</style>