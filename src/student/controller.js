// business logic will be stored here

//import the database or the pool from db.js
const pool = require('../../db');

//get student function
const getStudents = (req, res) => {
    // console.log("Getting students from stundet/controller.js");
    //use pool to query the database, query method, has two parameter == query("SQL statement", callback)
    pool.query("SELECT * FROM students", (error, results) => {
        //if there is an error throw an error
        if(error) throw error;
        //if there isn't a error (200 is the ok status), send back all the students on the database
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getStudents, 
};