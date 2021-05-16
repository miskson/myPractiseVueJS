Vue.component ('greet', {
    template: '<h1>{{title}}<button @click="changeTitle">Change title</button></h1>',
    data: function () {
        return {
            title: 'Title template',
        }
    },

    methods: {
        changeTitle: function () {
            this.title = "updated title!";
        }
    }

})

new Vue({
    el: "#app",
    data: {
        title:"title",
        pValue: 'i am default value',
    },
    methods: {
        changeTitle: function () {
            console.log(this.$refs);
            this.title = this.$refs.input.value;
        },

        changeP: function () {
            console.log(this.$refs);
            this.$refs.biba.value = this.$refs.input2.value;
            this.pValue = this.$refs.biba.value;
        }
    },
    computed: {
       
    }
});

