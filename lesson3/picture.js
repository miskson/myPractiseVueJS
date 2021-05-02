new Vue ({
    el:"#pic",
    methods: {
        show: function (params) {
            var picture = document.getElementsByClassName("picture");
            picture[0].style.visibility = 'visible';
        }
    }
})