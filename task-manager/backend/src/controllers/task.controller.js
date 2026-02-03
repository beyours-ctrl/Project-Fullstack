let tasks = [];

exports.getTasks = (req, res) => {
    res.json(tasks);
};

exports.createTask = (req, res) => {
    const task = {
        id: Date.now(),
        title: req.body.title
    };
    tasks.push(task);
    res.status(201).json(task);
};