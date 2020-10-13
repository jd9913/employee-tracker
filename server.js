const sqlite3 = require('sqlite3').verbose();

const express=require('express');

const PORT = process.env.PORT||3011;
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
// Connect to database
const db = new sqlite3.Database('./db/tracker.db', err => {
    if (err) {
      return console.error(err.message);
    }
  
    console.log('Connected to the employee tracking database.');
  });














  


// Delete a candidate
db.run(`DELETE FROM department WHERE id = ?`, 1, function(err, result) {
  if (err) {
    console.log(err);
  }
  console.log(result, this, this.changes);
});


// // GET a single department
// db.get(`SELECT * FROM department WHERE id = 1`, (err, row) => {
//     if(err) {
//       console.log(err);
//     }
//     console.log(row);
//   });


//   db.all(`SELECT * FROM department`, (err, rows) => {
//     console.log(rows);
//   });

// Default response for any other requests(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});