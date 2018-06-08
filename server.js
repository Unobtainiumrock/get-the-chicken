
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;

//Start express
const app = express();

// Serve static content
app.use(express.static('public'));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT,() => console.log(`listening on  ${PORT}`));
