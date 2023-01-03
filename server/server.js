const dotenv = require('dotenv').config()

const express = require('express')
const app = express();

const port = process.env.PORT || 8081

const Authentification = require('./routes/AuthRoute');

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Syndicat Application" });
  });


//Authentification_Routes
app.use('/api/auth', Authentification);

app.listen(port,()=>console.log(`Server started on port ${port}`))