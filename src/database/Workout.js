const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  return DB.workouts;
};

const createNewWorkout = (newWorkout) => {
  const isAddedAlready = DB.workouts.findIndex(
    (workout) => workout.name === newWorkout.name
  );
  if (isAddedAlready) {
    return;
  }

  DB.workouts.push(newWorkout);
  saveToDatabase(newWorkout);
  return newWorkout;
};

module.exports = { getAllWorkouts, createNewWorkout };
