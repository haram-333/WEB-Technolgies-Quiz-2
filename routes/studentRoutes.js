const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Create a new student
router.post('/', async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all students
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// PUT route to update a student by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,  // Get the student ID from URL
            req.body,       // New data to update
            { new: true }   // Return updated student data
        );

        if (!updatedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE route to remove a student by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);

        if (!deletedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



module.exports = router;
