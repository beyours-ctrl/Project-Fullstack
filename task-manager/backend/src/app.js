const express = require("express");
const app = express();

app.use(express.json());

const taskRoutes = require("./routes/task.routes");
app.use("/api/tasks", taskRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});