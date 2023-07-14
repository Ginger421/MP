
//const mysql = require('mysql2');
import mysql2 from 'mysql2';

import dotenv from 'dotenv';
dotenv.config();


var connection = mysql2.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT
});


connection.connect((err) => {
    if (err) {console.log(err.message)}
    console.log('db' + connection.state)
})

export default connection

