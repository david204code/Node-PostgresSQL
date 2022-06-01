const express = require('express')
const app = express();
const port = 3000;

//give it something to listen to on the / route with a callback function
app.get("/", (req, res) => {
    res.send("Hello and welcome!");
});

//check the health
app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK", timestamp: new Date() })
})

//listen to the port and a callback function 
app.listen(port, () => console.log(`This APP is listening on port ${port}`));
