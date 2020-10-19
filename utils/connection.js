const mysql = require('mysql2');
const express=require('express');

const app=express();

const PORT = process.env.PORT || 3011;

const sqlite3 = require('sqlite3').verbose();

// Connect to database

app.get('/', (req, res)=>{
    res.send("");
});


const database = new sqlite3.Database('./db/employeeTracking.db', err => {
    if (err) {
      return console.error(err.message);
    }
  
    console.log('Connected to the employee tracking database.');
  });


const connection = mysql.createConnection({

    host: 'localhost',
    port: `${PORT}`,
    user: 'root',
    password: 'password',
    database: 'employeeTracking'

});


//start server after DB connection
database.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});



module.exports = connection;