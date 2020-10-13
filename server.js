const sqlite3 = require('sqlite3').verbose();
const inputCheck = require('./utils/inputCheck');

const express = require('express');

const PORT = process.env.PORT || 3011;
const app = express();

app.use(express.urlencoded({ extended: false }));
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
  const sql = `SELECT * FROM departments`;
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

//get all roles with department name

app.get('/api/role', (req, res) => {
  const sql = `SELECT roles.*, departments.dept_name
  AS dept_name FROM roles
  LEFT JOIN departments
   ON roles.department_id = departments.id`;
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

//get a single role by id

app.get('/api/role/:id', (req, res) => {
  const sql = `SELECT * FROM roles WHERE id = ?`;
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

//update role
app.put('/api/role/:id', (req, res) => {
  const errors = inputCheck(req.body, 'department_id');

  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }
  const sql = `UPDATE roles SET department_id = ? 
               WHERE id = ?`;
  const params = [req.body.role_id, req.params.id];

  db.run(sql, params, function (err, result) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }

    res.json({
      message: 'success',
      data: req.body,
      changes: this.changes
    });
  });
});

// GET a single department
app.get('/api/department/:id', (req, res) => {
  const sql = `SELECT roles.*, departments.dept_name
  AS dept_name FROM roles
  LEFT JOIN departments
  ON roles.department_id = departments.id 
  WHERE roles.id = ?`;
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

// Delete a department
app.delete('/api/department/:id', (req, res) => {
  const sql = `DELETE FROM departments WHERE id = ?`;
  const params = [req.params.id];
  db.run(sql, params, function (err, result) {
    if (err) {
      res.status(400).json({ error: res.message });
      return;
    }

    res.json({
      message: 'successfully deleted',
      changes: this.changes
    });
  });
});

//delete a role
app.delete('/api/roles/:id', (req, res) => {
  const sql = `DELETE FROM roles WHERE id = ?`;
  const params = [req.params.id];
  db.run(sql, params, function (err, result) {
    if (err) {
      res.status(400).json({ error: res.message });
      return;
    }

    res.json({ message: 'successfully deleted', changes: this.changes });
  });
});

// Create a department
app.post('/api/department', ({ body }, res) => {
  const errors = inputCheck(body, 'dept_name');
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }
  const sql = `INSERT INTO departments (dept_name) 
              VALUES (?)`;
  const params = [body.dept_name];
  // ES5 function, not arrow function, to use `this`
  db.run(sql, params, function (err, result) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }

    res.json({
      message: 'success',
      data: body,
      id: this.lastID
    });
  });
});



// Default response for any other requests(Not Found) Catch all
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});