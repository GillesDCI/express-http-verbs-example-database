const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();

//allow us to send json information to the server. 
app.use(express.json());

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
,{
   useNewUrlParser:true, //default true
   useUnifiedTopology:true //default true
})
.then(() => {console.log("we are connected to the database.")})
.catch((error) => { console.log('an error occurred while connecting ot the db', error)})

const teaRoutes = require('./routes/teaRoutes');
app.use('/api/teas', teaRoutes)

//listening for requests
app.listen(3001, () => {
    console.log("The server is listening for requests...")
})
