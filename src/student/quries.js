// This where all the SQL quries are stored

//get all the students in the database
const getStudents = "SELECT * FROM students";

//get student by id, the dollar sign 1/$1 is the parameter
const getStudentById = "SELECT * FROM students WHERE id = $1";  

// exporting to student/controller.js
module.exports = {
    getStudents, getStudentById,
};