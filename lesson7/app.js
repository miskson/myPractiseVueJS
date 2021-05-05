new Vue({
    el:"#app",
    data: {
        body: document.getElementsByTagName("body"),
        lightbulb: document.getElementsByClassName("lightbulb"),
        hehe: document.getElementsByClassName("hehe"),
        message: "press esc to shut the lights off",
        input: document.getElementsByClassName("inp")
    },

    config: {
        keyCodes: {
            f2: 113
        }
    },

    methods: {
        greet: function () {
            return "hello Vue lesson7 - keyboard events"
        },
        scream: function () {
            console.log("HE'S TYPING!!!");
        },
        shutTheLights: function () {
            this.body[0].style.backgroundColor = "#000";
            this.lightbulb[0].style.backgroundColor = "Yellow";
            this.lightbulb[0].style.boxShadow = "5px 5px 100px gold";
            this.lightbulb[0].style.color = "Yellow";
            this.hehe[0].style.visibility = "visible";
            var headlinetwo = document.getElementsByClassName("headlinetwo");
            headlinetwo[0].style.color = "white"
            this.message = "press f2 to turn the lights on"

        },
        turnTheLights: function () {
            this.body[0].style.backgroundColor = "white";
            this.lightbulb[0].style.backgroundColor = "white";
            this.lightbulb[0].style.boxShadow = "5px 5px 5px black";
            this.lightbulb[0].style.color = "white";
            this.hehe[0].style.visibility = "hidden";
        },
        randColor: function () {
            var colors = ['#F0F8FF', '#7FFFD4', '#000000', '#FFD700', '#00FF00', '#800080', '#B22222'];
            var index = Math.floor(Math.random() * colors.length);
            this.input[0].style.backgroundColor = colors[index];
            this.input[0].style.boxShadow = "1px 2px 3px " + colors[index];
        }
    },



})