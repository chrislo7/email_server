const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// body parser
app.use(bodyParser.json());

// DB config 
const db = require("./config/keys").mongoURI;

// Connection to Mongo 

mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log('Connection to Mongo Established'))
    .catch(err => console.log(err));


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port} ...`));