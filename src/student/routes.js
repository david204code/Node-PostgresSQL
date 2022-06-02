// student routes are stored here

//Using "express" router 
const { Router } = require('express');

//import the student controller
const controller = require('./controller');

//router object
const router = Router();

//the route for the router, take the request and the respond
// router.get('/', (req, res) => {
//     res.send("using api route from route.js")
// });

//query the database and send back data from the database/get the JSON response with student and send it back

//this doesn't work
// router.get('/', () => controller.getStudents);

// short form, express knows 
router.get('/', controller.getStudents);
//route to get students by ID
router.get('/:id', controller.getStudentById);

module.exports = router;