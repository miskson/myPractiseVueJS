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
       
    },
    methods: {
        
    },
    computed: {
       
    }
});

