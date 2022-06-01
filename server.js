const express = require('express')
const app = express();
const port = 3000;

//listen to the port and a callback function 
app.listen(port, () => console.log(`This APP is listening on port ${port}`));
