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

//the route in the controller to getStudentById
const getStudentById = (req, res) => {
    //get the "id" out of the url, out of the parameter of the req/request. Will need to parse id from string to int
    const id = parseInt(req.params.id); 
    //[] to pass in the id variable
    pool.query(queries.getStudentById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

//exporting to student/routes.js
module.exports = {
    getStudents, getStudentById,
};