var one = new Vue({
    el: "#app1",
    data: {
       title: "lesson11 - multiple Vue instances",
    },
    methods: {
        
    },
    computed: {
        greet: function (params) {
            return "hello instance1"
        }
    }
});

var two = new Vue({
    el: "#app2",
    data: {
        title: "i am the second instance!",
    },
    methods: {
        changeTitleFirst: function (params) {
            one.title = "vue two changed vue one!"
        }
    },
    computed: {
        greet: function (params) {
            return "hello instance2"
        }
    }
});

two.title = "title changed from outside!"

