const express = require("express");
const router = express.Router();

const workoutController = require("../../controllers/workoutController");

// router.get("/", (req, res) => {
//   res.send("Gell all workouts");
// });

// router.get("/:workoutId", (req, res) => {
//   res.send("Get an existing workout");
// });

// router.post("/", (req, res) => {
//   res.send("create a new workout");
// });

// router.patch("/:workoutId", (req, res) => {
//   res.send("update an existing account");
// });

// router.delete("/:workoutId", (req, res) => {
//   res.send("Delete an account");
// });

router.get("/", workoutController.getAllWorkouts);
router.get("/:workoutId", workoutController.getOneWorkout);
router.post("/", workoutController.createNewWorkout);
router.patch("/:workout", workoutController.updateOneWorkout);
router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;
