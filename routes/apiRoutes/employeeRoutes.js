const express = require('express');
const router = express.Router();

const db = require('../../db/database');
const inputCheck = require('../../utils/inputCheck');

function getAllEmployees(){
//get employees
router.get('/employee', (req, res) => {
    const sql = `SELECT * FROM employees ORDER BY last_name`;
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
}

//get single employee
function getSingleEmp(){
router.get('/employee/:id', (req, res) => {
    const sql = `SELECT * FROM employees WHERE id = ?`;
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



//add new employee
function addNewEmp(){
router.post('/employee', ({ body }, res) => {

    const errors = inputCheck(body, 'first_name', 'last_name');

    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }

    const sql = `INSERT INTO employees (first_name, last_name) VALUES (?,?)`;
    const params = [body.first_name, body.last_name];

    db.run(sql, params, function (err, data) {
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


//update employee last_name
function updateLast(){
router.put('/employee/:id', (req, res) => {
    // Data validation
    const errors = inputCheck(req.body, 'email');
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }
  
    // Prepare statement
    const sql = `UPDATE employees SET last_name = ? WHERE id = ?`;
    const params = [req.body.last_name, req.params.id];
  
    // Execute
    db.run(sql, params, function(err, data) {
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
};

  //update employee first name

  function updatefirst(){
  router.put('/employee/:id', (req, res) => {
    // Data validation
    const errors = inputCheck(req.body, 'email');
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }
  
    // update employee
    const sql = `UPDATE employees SET first_name = ? WHERE id = ?`;
    const params = [req.body.first_name, req.params.id];
  
    // Execute
    db.run(sql, params, function(err, data) {
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
};


  //delete employee
  function deleteEmp(){
  router.delete('/employee/:id', (req, res) => {
    const sql = `DELETE FROM employees WHERE id = ?`;
  
    db.run(sql, req.params.id, function(err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
  
      res.json({ message: 'deleted', changes: this.changes });
    });
  });
};








module.exports = router;