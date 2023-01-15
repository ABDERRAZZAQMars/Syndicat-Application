const dotenv = require('dotenv').config()
const express = require('express')
const app = express();
const port = process.env.PORT || 8081
const Authentification = require('./routes/AuthRouters');
const globalError = require('./middlewares/errorHandler');
const db = require('./config/db')
const cors = require('cors');
const appartement = require('./routes/AppartementRouters');
const client = require('./routes/ClientRouters');
const payment = require('./routes/PaymentRouters');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

//simple_route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Syndicat Application" });
});

//Routes
app.use('/api/auth', Authentification);
app.use('/api/admin' , appartement); 
app.use('/api/admin' , client); 
app.use('/api/admin' , payment); 

//Error_Handler
app.use(globalError);

app.listen(port, (err) => {
  if (!err) {
    console.log(`Server started on port ${port}`)
  } else {
    console.log(err)
  }
});

module.exports = app