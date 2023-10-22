
//const mysql = require('mysql2');
import mysql2 from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

let instance = null;

const connection = mysql2.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT
});


connection.connect((err) => {
    if (err) {console.log(err.message)}
    console.log("Connected to the MySQL server :-)")
    //console.log(connection.state)
})

class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }

    async getAll() {
        try {
            const response = await new Promise((resolve, reject) => {
               const query = "SELECT * FROM main;";

               connection.query(query, (err, results) => {
                if (err) reject (new Error(err.message));
                resolve(results);
               })
            }) //end response 
            
            return response;
            //console.log(response)
        } catch (error) {
            console.log(error);
        }
    } //end getAll()

    //insert name and date added into table with autogen id 
    async createNew(name) { //changed from insertNewName
        try { 
            const dateAdded = new Date(); 
            //named insertId because we are expecting it to insert ID bc id is autogenerated
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO fullstack_db (name, date_added) VALUES (?, ?);"; 

                connection.query(query, [name, dateAdded] , (error, result) => {
                    if (error) reject (new Error(error.message));
                    resolve(result.insertId())  //error code for this line stopped about 47 mins
                }
                ) //end connection.query
            }); //end const insertId
            //return response;
            console.log(insertId)
        } catch (error) {
            console.log(error);
        }
    } //end async createNew(name)

} //end DbService

//module.exports = DbService;

export default DbService

//stopped at 27 minutes
 

