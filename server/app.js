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

//DECLARED THIS VAR GLOBALLY SO WILL COMMENT OUT THE VARIABLE IN app.get
const db = DbService.getDbServiceInstance();

//create post
app.post('/addData', (request, response) => {
    //console.log(request.body);
    const { name } = request.body;
 
    const result = db.createNew(name); 
    result
    .then(data => response.json({ data: data})) //ReferenceError: success is not defined
    //at file:///C:/Users/ginge/OneDrive/Desktop/expressPractice/server/app.js:25:34
    .catch(err => console.log(err))

})

//read get
app.get('/all', (req, response) => {
    //const db = DbService.getDbServiceInstance();

    const result = db.getAll(); //getAll is fromDbService.js

    result
    .then (data => response.json({data : data})) 
    .catch(err => console.log(err))
    
});




//delete delete



app.listen(PORT, ()=>console.log("app listening on port" + PORT));

//stopped at 36minutes  cannot get console log from index.js to work