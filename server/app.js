//import dependencies and mudules
import mysql2 from 'mysql2';
import express from "express"; 
import cors from "cors";
import dotenv from "dotenv"
dotenv.config();
let PORT = process.env.PORT;
import connection from './db.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


//create post

//read get
app.get('/getAll', (req, response) => {
    response.json({ success : true })
})
//update put

//delete delete



app.listen(PORT, ()=>console.log("app listening on port" + PORT));