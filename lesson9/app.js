new Vue({
    el: "#app",
    data: {
        title: "vue.js lesson9 - computed properties",
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
            UAH = this.UAH;
            if (UAH < 0) {
                return "unreal value!"
            }
            return UAH * 28.5
        }
    }
})