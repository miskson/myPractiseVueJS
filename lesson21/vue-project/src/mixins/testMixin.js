export default {
    methods: {
        toLog: function() {
            console.log("im working");
        },
    },

    filters: {
        'to-upper': function (text) {
            return text.toUpperCase();
        }
    },
}