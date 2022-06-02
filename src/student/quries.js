// This where all the SQL quries are stored

//get all the students in the database
const getStudents = "SELECT * FROM students";

//get student by id, the dollar sign 1/$1 is the parameter
const getStudentById = "SELECT * FROM students WHERE id = $1";  

//query to check if email exist in the database, using s as an alias for student, $1 is the variable we are passing into this query
const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";

//query to add student and we are passing variable into with the $1/$2
const addStudent = "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";

// exporting to student/controller.js
module.exports = {
    getStudents, 
    getStudentById,
    checkEmailExists,
    addStudent,
};