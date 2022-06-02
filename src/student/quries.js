// This where all the SQL quries are stored

//get all the students in the database
const getStudents = "SELECT * FROM students";

//get student by id, the dollar sign 1/$1 is the parameter
const getStudentById = "SELECT * FROM students WHERE id = $1";  

//query to check if email exist in the database, using s as an alias for student, $1 is the variable we are passing into this query
const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";

//query to add student and we are passing variable into with the $1/$2
const addStudent = "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";

//query to remove student by id, "students" is the name of the table
const removeStudent = "DELETE FROM students WHERE id = $1";

//query to update student, students is the name of the table. $1 is the first variable/name passed in, 
//$2 is the second variable passed in 
const updateStudent = "UPDATE students SET name = $1 WHERE id = $2";

// exporting to student/controller.js
module.exports = {
    getStudents, 
    getStudentById,
    checkEmailExists,
    addStudent,
    removeStudent,
    updateStudent,
};