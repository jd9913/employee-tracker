const inquirer = require('inquirer');
const express = require('express');
const router = express.Router();

const db = require('../../db/database');
const inputCheck = require('../../utils/inputCheck');

const startingQuestion=['View all employees', 'View all employees by department', 'view all employees by manager', 'add employee', 'remove employee', 'update employee', 'view all departments', 'add department','remove department', 'update department', 
'view all roles', 'add role', 'update role', 'remove roles', 'view salary information by department', 'quit application'];

const startScreen =()=>{
    inquirer.prompt({

        name: 'menu',
        type: 'list',
        message: 'select an option',
        choices: startingQuestion
    }).then((answer)=>{
        switch(answer.menu){
            case 'View all employees':
                getAllEmployees();
                break;

            case 'View all employees by department':

            case 'view all employees by manager':

            case 'add employee':

            case 'update employee':

            case 'remove employee':

            case 'view all departments':

            case 'add department':
                
            case 'remove department':
            
            case 'update department':

            case 'view all roles':
                
            case 'add role':
                
            case 'update role':
                
            case 'remove roles':
                
            case 'view salary information by department':
                
            case 'quit application':
        }
        
    })
}

module.express=router;