<template>
    <div>
        <h1>{{title}}</h1>
    </div>
</template>

<script>
import {bus} from '../main'

export default {
    data() {
        return {
            title: 'I am Header!',
        }
    },

    created() {
        bus.$on('message', data =>{
            this.title = data;
        })
    }
}
</script>

<style scoped>
    h1 {
        color: purple;
        background-color: mediumspringgreen;
        border: 5px double yellow;
        width: fit-content;
    }
</style>