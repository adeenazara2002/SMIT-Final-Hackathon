const express = require("express");
const router = express.Router();
const Task = require("../models/taskModel");
const protect = require("../middleware/authMiddleware");

// Create a new task
router.post("/", protect, async (req, res) => {
  const { title, description, assignedTo, status } = req.body;

  try {
    const newTask = new Task({ title, description, assignedTo, status });
    await newTask.save();
    res.json(newTask);
  } catch (err) {
    res.status(400).json({ message: "Error creating task" });
  }
});

// Get tasks
router.get("/", protect, async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update 
router.put("/:id", protect, async (req, res) => {
  const { status } = req.body;
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: "Error updating task" });
  }
});

// Delete
router.delete("/:id", protect, async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(400).json({ message: "Error deleting task" });
  }
});

module.exports = router;
