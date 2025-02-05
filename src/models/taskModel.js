let taskLists = [ { taskTitle: 'Arrumar o quarto', generalTasks: [{ name:'Guardar os tênis', completed: false }] } ]

const taskModel = {
    getAllTasks(){
        return taskLists
    },
    findTask(title){
        const taskFound = taskLists.find(task => task.taskTitle === title)
        return taskFound
    },
    createTask(title){
        const task = {
            taskTitle: title,
            generalTasks: []
        }

        taskLists.unshift(task)
    },
    deleteTask(title){
        taskLists = taskLists.filter(task => task.taskTitle !== title)
    },
    subTaskCreate(title, newSubTask){
        const task = this.findTask(title)
        task.generalTasks.unshift(newSubTask)
    },
    subTaskDelete(title, subTaskName){
        const taskList = this.findTask(title)
        taskList.generalTasks = taskList.generalTasks.filter(subtask => subtask.name !== subTaskName)
    },
    completeTask(title, subTaskName){
        const taskList = this.findTask(title)
        const task = taskList.generalTasks.find(task => task.name === subTaskName)
        task.completed = true
    },
    undoTask(title, subTaskName){
        const taskList = this.findTask(title)
        const task = taskList.generalTasks.find(task => task.name === subTaskName)
        task.completed = false
    }
}

module.exports = taskModel
