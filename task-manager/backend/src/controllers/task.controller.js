const Task = require("../models/task.model");

exports.getTasks = async (req, res) => {
    const tasks = await Task.getAllTasks();
    res.json(tasks);
};

exports.createTask = async (req, res) => {
    const task = await Task.createTask(req.body.title);
    res.status(201).json(task);
};