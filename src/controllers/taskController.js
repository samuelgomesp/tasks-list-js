const taskModel = require("../models/taskModel")

const taskController = {
    // GET '/'
    index: (req, res) => {
        res.render('index')
    },
    // GET '/tasks'
    show: (req, res) => {
        const tasks = taskModel.getAllTasks()

        res.render('tasks', { tasks })
    },
    // GET '/tasks/find/:title'
    find: (req, res) => {
        const titleFound = req.params.title
        const task = taskModel.findTask(titleFound)
        console.log(task)

        res.render('subtask', { task })
    },
    // POST '/tasks/create'
    create: (req, res) => {
        const taskController = req.body.title
        taskModel.createTask(taskController)
        
        res.redirect('/tasks')
    },
    // POST '/tasks/delete/:title'
    delete: (req, res) => {
        const taskController = req.params.title
        taskModel.deleteTask(taskController)

        res.redirect('/tasks')
    },
    // POST '/subtask/create/:title'
    subtaskcreate: (req, res) => {
        const taskController = req.params.title
        const subTaskController = req.body.subtask
        const objTask = { name: subTaskController, completed: false }
        taskModel.subTaskCreate(taskController, objTask)

        res.redirect(`/tasks/${taskController}`)
    },
    // POST '/subtask/delete/:title/:subtitle'
    subtaskdelete: (req, res) => {
        const taskController = req.params.title
        const subTaskController = req.body.subtaskdelete
        console.log(subTaskController)
        taskModel.subTaskDelete(taskController, subTaskController)

        res.redirect(`/tasks/${taskController}`)
    },
    // POST /tasks/:title/complete/:subtasktitle
    completeTask: (req, res) => {
        const { title, subtasktitle } = req.params

        taskModel.completeTask(title, subtasktitle)

        res.redirect(`/tasks/${title}`)
    },

    // POST /tasks/:title/unmake/:subtasktitle
    undoTask: (req, res) => {
        const { title, subtasktitle } = req.params

        taskModel.undoTask(title, subtasktitle)

        res.redirect(`/tasks/${title}`)
    }
}

module.exports = taskController