new Vue({
    el: "#app",
    data: {
        title: "vue.js lesson10 - conditionals",
        error: false,
        success: false,
        A: 0,
        B: 0,
        age: 20,
        USD: 0,
        UAH: 0
    },
    methods: {
        
    },
    computed: {
        addToA: function () {
            console.log('addToA');
            return this.A + this.age;
        },

        addToB: function () {
            console.log('addToB');
            return this.B + this.age;
        },

        toUsd: function () {
            console.log('toUsd');
            if (this.UAH >= 0) {
                return Number(this.UAH * 28.5);
            }
            else {
                return false;
            }
        }
    }
})