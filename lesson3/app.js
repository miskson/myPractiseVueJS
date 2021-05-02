new Vue({
    el:"#app",
    data: {
        pagetitle: "Data, methods and reactivity in Vue.js",
        name: "Sergei",
        job: "Front-end developer",
        salary: 300
    },
    methods: {
        greet: function (params) {
            return "hello my name is " + this.name
        }
    }
})