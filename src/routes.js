const express = require('express')
const taskController = require('./controllers/taskController')

const router = express.Router()

router.get('/', taskController.index)
router.get('/tasks', taskController.show)
router.post('/tasks/create', taskController.create)
router.post('/tasks/delete/:title', taskController.delete)
router.get('/tasks/:title', taskController.find)
router.post('/subtask/create/:title', taskController.subtaskcreate)
router.post('/subtask/delete/:title', taskController.subtaskdelete)
router.post('/tasks/:title/complete/:subtasktitle', taskController.completeTask)
router.post('/tasks/:title/unmake/:subtasktitle', taskController.undoTask)

module.exports = router