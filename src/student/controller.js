// business logic will be stored here

//import the database or the pool from db.js
const pool = require('../../db');
//import the student/quries.js file here
const queries = require('./quries');

//get student function
const getStudents = (req, res) => {
    // console.log("Getting students from stundet/controller.js");
    //use pool to query the database, query method, has two parameter == query("SQL statement", callback)
    pool.query(queries.getStudents, (error, results) => {
        //if there is an error throw an error
        if(error) throw error;
        //if there isn't a error (200 is the ok status), send back all the students on the database
        res.status(200).json(results.rows);
    });
};

//the function in the controller to getStudentById
const getStudentById = (req, res) => {
    //get the "id" out of the url, out of the parameter of the req/request. Will need to parse id from string to int
    const id = parseInt(req.params.id); 
    //[] to pass in the id variable
    pool.query(queries.getStudentById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

//the function to addStudent to the database from a post request
const addStudent = (req, res) => {
    //JavaScript destructure to send the post request to the database in JSON format in the request body. 
    //The req.body is an object
    const { name, email, age, dob } = req.body;
    //check if the email is valid and is not already in the database
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        //if there is an email, it is going to return some rows
        if(results.rows.length) {
            //send back some repsone like email already taken
            res.send("Email already exists.");
        }
        //add student to database, taking in the variable with [], (error, result) is the callback function
        pool.query(queries.addStudent, [name, email, age, dob], (error, results) => {
            if(error) throw error;
            //if there isn't an error, add the student to the database, 201 means student has been created successfully
            res.status(201).send("Student Created Successfully!");
            console.log("Student created");
        })
    });
};

//exporting to student/routes.js
module.exports = {
    getStudents, 
    getStudentById,
    addStudent,
};