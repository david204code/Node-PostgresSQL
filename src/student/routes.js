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
router.get("/", controller.getStudents);
//Post route to create student for the database to store
router.post("/", controller.addStudent);
//route to get students by ID
router.get("/:id", controller.getStudentById);
//route to delete student by ID
router.delete("/:id", controller.removeStudent);

module.exports = router;