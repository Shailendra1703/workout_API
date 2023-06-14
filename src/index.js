const express = require("express");

const app = express();
const bodyParser = require("body-parser");

// const v1Router = require("./v1/routes");

const v1WorkoutRoutes = require("./v1/routes/workoutRoutes");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hiii API</h1>");
});

// app.use("/api/v1", v1Router);
app.use(bodyParser.json());

app.use("/api/v1/workouts", v1WorkoutRoutes);

app.listen(PORT, () => {
  console.log(`App started listning at http://localhost:${PORT}`);
});
