// student routes are stored here

//Using "express" router 
const { Router } = require('express');

//router object
const router = Router();

//the route for the router, take the request and the respond
router.get('/', (req, res) => {
    res.send("using api route from route.js")
});

module.exports = router;