<template>
    <div class="">
        <slot name="title2"></slot>
        <h1>This is slot's title!</h1>
        <slot name="text"></slot>
    </div>
</template>

<script>


export default {
 
}
</script>

<style>
    h1 {
        color: red;
        text-shadow: 1px 1px 2px black;
    }
</style>