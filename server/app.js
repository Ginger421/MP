import express from "express";
//const express = require('express'); 
import cors from "cors";
//import connection from '/db'; 
// require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
var PORT = 3001;

//create post

//read get
app.get('/getAll', (req, response) => {
    response.json({ success : true })
})
//update put

//delete delete



app.listen(PORT, ()=>console.log("app listening on port" + PORT));