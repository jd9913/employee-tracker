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

// Get all departments
app.get('/api/department', (req, res) => {
    const sql = `SELECT * FROM department`;
    const params = [];
    db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
  
      res.json({
        message: 'success',
        data: rows
      });
    });
  });







// Create a candidate
const sql = `INSERT INTO department (id, dept_name) 
              VALUES (?,?)`;
const params = [20, 'planning'];
// ES5 function, not arrow function, to use this
db.run(sql, params, function(err, result) {
  if (err) {
    console.log(err);
  }
  console.log(result, this.lastID);
});



// // Delete a candidate
// db.run(`DELETE FROM department WHERE id = ?`, 1, function(err, result) {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result, this, this.changes);
// });


// GET a single department
app.get('/api/department/:id', (req, res) => {
    const sql = `SELECT * FROM department 
                 WHERE id = ?`;
    const params = [req.params.id];
    db.get(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
  
      res.json({
        message: 'success',
        data: row
      });
    });
  });




// Default response for any other requests(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});