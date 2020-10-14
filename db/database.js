const sqlite3 = require('sqlite3').verbose();

// Connect to database
const db = new sqlite3.Database('./db/tracker.db', err => {
    if (err) {
      return console.error(err.message);
    }
  
    console.log('Connected to the employee tracking database.');
  });


  module.exports=db;