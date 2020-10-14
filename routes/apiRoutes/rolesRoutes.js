const express = require('express');
const router = express.Router();

const db = require('../../db/database');
const inputCheck = require('../../utils/inputCheck');


//get all roles with department name
router.get('/role', (req, res) => {
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
  
  router.get('/role/:id', (req, res) => {
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
  router.put('/role/:id', (req, res) => {
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
  
  
  
  //delete a role
  router.delete('/roles/:id', (req, res) => {
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

  module.exports=router;