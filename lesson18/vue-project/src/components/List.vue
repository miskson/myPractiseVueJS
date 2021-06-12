<template>
    <div>
        <h2 @click="show">List title:</h2>
        <ul>
            <li v-for="elem in listElem">{{elem}}</li>
        </ul>
    </div>
</template>

<script>


export default {
    props: {
        listElem: {
            type: Array,
            requiered: false,
            default: [], 
        },
    },

    methods: {
        show: function(params) {
            console.log(this.listElem)
        },
    }
}
</script>

<style>

</style>