const db = require("../db");

exports.getAllTasks = async () => {
    const result = await db.query("SELECT * FROM tasks ORDER BY id DESC");
    return result.rows;
};

exports.createTask = async (title) => {
    const result = await db.query(
        "INSERT INTO tasks (title) VALUES ($1) RETURNING *",
        [title]
    );
    return result.rows[0];
};