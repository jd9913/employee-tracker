const express = require('express');
const router = express.Router();

const db = require('../../db/database');
const inputCheck = require('../../utils/inputCheck');

// Get all departments
function getDepts(){
router.get('/department', (req, res) => {
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
};

  // GET a single department

  function getSingleDept(){
router.get('/department/:id', (req, res) => {
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
};
  
  // Delete a department
  function deleteDept(){
  router.delete('/department/:id', (req, res) => {
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
};

  // Create a department
  function createDept(){
router.post('/department', ({ body }, res) => {
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
};

  module.exports=router;