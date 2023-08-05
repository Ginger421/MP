//import dependencies and mudules
import mysql2 from 'mysql2';
import express from "express"; 
import cors from "cors";
import dotenv from "dotenv"
dotenv.config();
let PORT = process.env.PORT;
//import connection from './connection.js'
import DbService from './DbService.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


//create post

//read get
app.get('/getAll', (req, response) => {
    const db = DbService.getDbServiceInstance();

    const result = db.getAll(); 

    result
    .then (data => response.json({data : data})) 
    .catch(err => console.log(err))
    
});

//update put
app.post('/insert', (request, response) => {

});

//delete delete



app.listen(PORT, ()=>console.log("app listening on port" + PORT));

//stopped at 36minutes  cannot get console log from index.js to work