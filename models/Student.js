const mongoose = require('mongoose');

// Create student schema
const studentSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    marks: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    cnicNumber: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    scholarshipStatus: {
        type: Boolean,
        required: true
    }
});

// Create a model based on the schema
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
