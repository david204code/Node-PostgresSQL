const express = require('express');
const studentRoutes = require('./src/student/routes');

const app = express();
const port = 3000;

//add a middleware
app.use(express.json());

//give it something to listen to on the / route with a callback function
app.get("/", (req, res) => {
    res.send("Hello and welcome!");
});

//check the health
app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK", timestamp: new Date() })
})

//create the route that leads to our student route and passing in the studentRoutes
app.use('/api/v1/students', studentRoutes);


//listen to the port and a callback function 
app.listen(port, () => console.log(`This APP is listening on port ${port}`));
