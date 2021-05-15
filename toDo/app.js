new Vue({
    el: "#app",
    data: {
        currentTask: "",
        editValue: "",
        tasks: [
            {
                text: 'buy milk',
                isComleted: false,
                isEdited: false,
            },
            {
                text: 'get the check',
                isComleted: true,
                isEdited: false,
            },
            {
                text: 'get the cash',
                isComleted: false,
                isEdited: false,
            }
        ]

    },

    methods: {
        addTask: function () {
           this.tasks.push({
               text: this.currentTask,
               isComleted: false
           }),
           this.currentTask = '';
        },

        removeTask: function (taskText) {
            this.tasks = this.tasks.filter(task => {
                return task.text !== taskText;
            });
        },

        changeEditing: function (taskText) {
            this.editValue = taskText;
            this.tasks = this.tasks.map(task => {
                if(task.text === taskText) {
                    task.isEdited = !task.isEdited;
                }
                return task;
            })
        },

        editTask: function (taskText) {
            this.tasks = this.tasks.map(task => {
                if(task.text === taskText) {
                    task.isEdited = !task.isEdited;
                    task.text = this.editValue;
                }
                return task;
            })
        }
    },

    computed: {

    }
})