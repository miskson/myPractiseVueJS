<template>
    <div>
        <input type="text" v-model="message" @keyup.enter="saveMessage">
        <h2 @click="show">List title:</h2>
        <ul>
            <li v-for="elem in listElem">{{elem}}</li>
        </ul>
    </div>
</template>

<script>
import {bus} from '../main'

export default {
    props: {
        listElem: {
            type: Array,
            requiered: false,
            default: [], 
        },
    },

    data() {
        return {
            message: '',
        }
    },
 
    methods: {
        show: function(params) {
            console.log(this.listElem)
        },

        saveMessage: function (params) {
            this.$emit('listAdd', this.message);
            bus.$emit('message', this.message); // THIS IS EXAMPLE OF CUSTOM EVENT
            this.message = '';
        }
    }
}
</script>

<style>

</style>