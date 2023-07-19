
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
            })
            
            return response;
            //console.log(response)
        } catch (error) {
            console.log(error);
        }
    }
}

//module.exports = DbService;

export default DbService

//stopped at 27 minutes
 

