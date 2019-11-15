// dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const emails = require('./routes/api/emails');

const app = express();

// cors
app.use(cors())

// body parser
app.use(bodyParser.json());

// DB config 
const db = require("./config/keys").mongoURI;

// Connection to Mongo 
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log('Connection to Mongo Established'))
    .catch(err => console.log(err));

// Routes
app.use('/send-email', emails);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port} ...`));