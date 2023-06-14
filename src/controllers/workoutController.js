const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({ status: "OK", data: allWorkouts });
};

const getOneWorkout = (req, res) => {
  const workout = workoutService.getAllWorkouts();
  res.send("Get one workout");
};

const updateOneWorkout = (req, res) => {
  const updateOneWorkout = workoutService.updateOneWorkout();
  res.send("update an existing workout");
};

const deleteOneWorkout = (req, res) => {
  workoutService.deleteOneWorkout();
  res.send("Delete one workout ");
};

const createNewWorkout = (req, res) => {
  const { body } = req;
  //we used body-parser to accept json from req
  //validations
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    excercises: body.exercises,
    trainerTips: body.trainerTips,
  };

  const createdWorkout = workoutService.createNewWorkout(newWorkout);
  res.status(201).send({ status: "OK", data: createdWorkout });
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
