const Workout = require("../database/Workout");
const { v4: uuid } = require("uuid");

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
};

const getOneWorkout = () => {};

const createNewWorkout = (newWorkout) => {
  const data = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-us", { timeZone: "UTC" }),
  };

  const createdWorkout = Workout.createNewWorkout(data);
  return createdWorkout;
};
const updateOneWorkout = () => {};
const deleteOneWorkout = () => {
  return;
};

module.exports = {
  getAllWorkouts,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
  getAllWorkouts,
};
