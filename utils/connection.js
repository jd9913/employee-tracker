const mysql = require('mysql2');

const PORT = process.env.PORT || 3011;

const sqlite3 = require('sqlite3').verbose();

//create connection to the database

const mysql = require('mysql2');




// Connect to database


const db = new sqlite3.Database('./db/tracker.db', err => {
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
    database: db

});



//start server after DB connection
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});



module.exports = connection, db;