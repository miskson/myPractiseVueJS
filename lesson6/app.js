new Vue({
    el: "#app",
    data: {
        word: "hello Vue.js. Events",
        counter: 0,
        color: '#000000'
    },

    methods: {
        increaseCount: function() {
            return this.counter += 1;
        },
        decreaseCount: function () {
            return this.counter -= 1;
        },
        resetCount: function () {
            return this.counter = 0;
        },
        scrollColor: function () {
            var block = document.getElementsByClassName("colorful");
            var colors = ['#F0F8FF', '#7FFFD4', '#000000', '#FFD700', '#00FF00', '#800080', '#B22222'];
            var index = Math.floor(Math.random() * colors.length);
            block[0].style.backgroundColor = colors[index];
            return this.color = colors[index];
        }
    },
})