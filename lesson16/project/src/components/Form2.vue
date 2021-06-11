<template>
  <form action="post">
      <h1>form 2</h1>
      <p>Name:</p>
      <input type="text" name="Name" id="">
      <p>E-mail:</p>
      <input type="mail" name="" id="">
      <button type="submit">Log in</button>
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
       border: 5px double black;
       padding: 10px;
   }
</style>