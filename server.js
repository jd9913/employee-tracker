
const inputCheck = require('./utils/inputCheck');
const connection = require('./utils/connection');
const inquirer = require('inquirer');
const table = require('console.table');
const db = require('./utils/connection');
const figlet = require('figlet');


connection.connect((err) => {
  if (err) throw err;
  console.log(figlet.textSync('Tracking Employees'));

  startApp();
})

const startApp = () => {
  inquirer
    .prompt([
      {
        name: 'choice',
        type: 'list',
        message: 'Please select an option:',
        choices: [
          'View All Employees',
          'View All Roles',
          'View All Departments',
          'View All Employees By Department',
          'View Department Budgets',
          'Update Employee Role',
          'Update Employee Manager',
          'Add Employee',
          'Add Role',
          'Add Department',
          'Remove Employee',
          'Remove Role',
          'Remove Department',
          'Exit'
        ]
      }
    ]).then((answer) => {
      switch (answer.choice) {
        case "View All Employees":
          return viewAllEmp();
        case "View All Roles":
          return viewAllRole();
        case "View All Departments":
          return viewAllDept();
        case "View All Employees By Department":
          return viewEmpbyDept();
        case "View Department Budgets":
          return viewBudg();
        case "Update Employee Role":
          return updateEmpRole();
        case "Update Employee Manager":
          return updateMgr();
        case "Add Employee":
          return addEmp();
        case "Add Role":
          return addRole();
        case "Add Department":
          return addDept();
        case "Remove Employee":
          return remEmp();
        case "Remove Role":
          return remRole();
        case "Remove Department":
          return remDept();
        case "Exit":
          connection.end();
      }
    });
};

const viewAllEmp = () => {
  const query = `SELECT employee.id, employee.first_name, employee.last_name, role.role_title, department.dept_name AS 'department', role.salary FROM  employee, role, department WHERE department.id=role.department_id AND role.id=employee.role_id ORDER BY employee.id;`

  connection.promise().query(query, (err, res) => {
    if (err) throw err;
    console.log("Current Employees:");
    console.table(res);
    userPrompt();
  });
};

const viewAllRole = () => {
  const query = `SELECT role.id, role.role_title, department.dept_name AS department FROM role INNER JOIN department ON role.dept_id=department.id`;

  console.log('Employee roles');
  connection.promise().query(query, (err, res) => {
    if (err) throw err;
    res.forEach((role) => {
      console.log(role.role_title);
    });
    userPrompt();
  });
};

const viewAllDept = () => {
  const query = `SELECT department.id AS id, department.dept_name AS department FROM department`;
  connection.promise().query(query, (err, res) => {
    if (err) throw err;

    console.log("All Departments")
    console.table(res);
    userPrompt();
  });
};

const viewEmpbyDept = () => {
  const query = `SELECT employee.first_name, employee.last_name, department.dept_name AS department FROM employee LEFT JOIN role ON employee.role_id=role.id LEFT JOIN department ON role.department_id=department.id`;
  connection.promise().query(query, (err, res) => {
    if (err) throw err;
    console.log("Employees by Department");
    console.table(res);
    userPrompt();
  });
};

const viewBudg = () => {
  const query = `SELECT department_id AS id, department.dept_name AS department, SUM(salary)AS budget FROM role INNER JOIN department ON role.department_id = department.id GROUP BY role.department_id`;
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.log('Budgets by Department')
    console.table(res);
    userPrompt();
  });
};

const addEmp = () => {
  inquirer
    .prompt([
      {
        name: 'fName',
        type: 'input',
        message: "Enter employee's first name",
        validate: addFName => {
          if (addFName) {
            return true;
          } else {
            console.log('field cannot be empty');
            return false;
          }
        }
      },
      {
        name: 'lName',
        type: "input",
        message: "Enter employee's last name",
        validate: addLName => {
          if (addLName) {
            return true;
          } else {
            console.log('field cannot be empty');
            return false;
          }
        }
      }
    ]).then((answer) => {
      const name = [answer.fName, answer.lName];
      const query = `SELECT role.id, role.role_title, FROM role`;
      connection.promise().query(query, (err, res) => {
        if (err) throw err;
        const roles = res.map(({ id, role_title }) => ({ name: role_title, value: id }));
        inquirer.prompt([
          {
            name: 'roles',
            type: "input",
            message: "Enter employee's role",
            choices: roles
          }
        ]).then(roleAns => {
          const role = roleAns.role;
          name.push(role);
          const query = `SELECT*FROM employee`;
          connection.promise().query(query, (err, res) => {
            if (err) throw err;
            const manager = res.map(({ id, first_name, last_name }) => ({ name: first_name + " " + last_name, value: id }));
            inquirer.prompt([
              {
                name: 'manager',
                type: 'list',
                message: "Enter employee's manager",
                choices: manager
              }
            ]).then(mgrAns => {
              const manager = mgrAns.manager;
              name.push(manager);
              const query = `INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
              connection.query(query, (err, res) => {
                if (err) throw err;
                console.log("Employee added successfully")
                viewAllEmp();
              });
            });
          });
        });
      });

    });

};

const addRole = () => {
  const query = `SELECT * FROM department`;
  connection.promise().query(query, (err, res) => {
    if (err) throw err;
    let deptname = [];
    res.forEach((department) => {
      deptname.push(department.dept_name);
    });
    deptname.push('Create Department');
    inquirer
      .prompt([
        {
          name: 'dept',
          type: 'list',
          message: 'choose department role belongs to',
          choices: deptname
        }
      ]).then((answer) => {
        if (answer.dept === 'Create Department') {
          this.addDept();
        } else {
          addRoleCont(answer);
        }
      });

    const addRoleCont = (data) => {
      inquirer
        .prompt([
          {
            name: 'newRole',
            type: "input",
            message: "enter the new role",

          },
          {
            name: 'salary',
            type: 'input',
            message: 'enter the salary for this role'
          }
        ]).then((answer) => {
          let role = answer.newRole;
          let deptId = "";

          res.forEach((department) => {
            if (data.dept === department.dept_name) { deptId = department.id };
          });

          let query = `INSERT INTO role (role_title, salary, department_id) VALUES (?,?,?)`;

          let newRole = [role, answer.salary, deptId];

          connection.promise().query(query, newRole, (err) => {
            if (err) throw err;
            console.log('role created');
            viewAllRole();
          });

        });
    };
  });
};

const addDept = () => {
  inquirer.prompt([
    {
      name: "deptName",
      type: "input",
      message: "Enter the name of the department"
    }
  ]).then((answer) => {
    const query = `INSERT INTO department(dept_name) VALUES(?)`;
    connection.query(query, answer.deptName, (err, res) => {
      if (err) throw err;
      console.log('department created')
      viewAllDept();
    });
  });
};

const updateEmpRole = () => {
  const query = `SELECT employee.id, employee.first_name, employee.last_name, role.id AS "role_id" FROM employee, role, department WHERE department.id=role.department_id AND role.id=employee.role_id`;
  connection.promise().query(query, (err, res) => {
    if (err) throw err;
    let empArray = [];
    res.forEach((employee) => {
      empArray.push(`${employee.first_name} ${employee.last_name}`);
    });
    const query = `SELECT role.id, role.role_title FROM role`;
    connection.promise().query(query, (err, res) => {
      if (err) throw err;
      let roleArray = [];
      res.forEach((role) => {
        roleArray.push(role.role_title);
      });
      inquirer
        .prompt([
          {
            name: 'emp',
            type: 'list',
            message: 'choose the employee with the new role',
            choices: empArray
          },
          {
            name: 'role',
            type: 'list',
            message: "choose employee's new role",
            choices: roleArray
          }
        ]).then((answer) => {
          let newRole = "";
          let empId = "";
          res.forEach((role) => {
            if (answer.role === role.role_title) {
              newRole = role.id;
            }
          });
          res.forEach((employee) => {
            if (answer.emp === `${employee.first_name} ${employee.last_name}`) {
              empId = employee.id;
            }
          });
          const query = `UPDATE employee SET employee.role_id=? WHERE employee.id=?`;
          connection.query(query, [newRole, empId], (err) => {
            if (err) throw err;
            console.log('update successful');
            userPrompt();
          });
        });
    });
  });
};

const updateMgr = () => {
  const query = `SELECT employee.id, employee.first_name, employee.last_name, employee.manager_id FROM employee`;
  connection.promise().query(query, (err, res) => {
    let empArray = [];
    res.forEach((employee) => {
      empArray.push(`${employee.first_name}${employee.last_name}`);
    });
    inquirer
      .prompt([
        {
          name: "emp",
          type: "list",
          message: "choose the employee with a new manager",
          choices: empArray
        },
        {
          name: 'mgr',
          type: 'list',
          message: 'choose the name of the new manager',
          choices: empArray;
        }
      ]).then((answer) => {
        let empId = "";
        let mgrId = "";
        res.forEach((employee) => {
          if (answer.emp === `${employee.first_name} ${employee.last_name}`) {
            empId = employee.id;

          };

          if (answer.mgr === `${employee.first_name} ${employee.last_name}`) {
            mgrId = employee.id;
          };
        });
        const query = `UPDATE employee SET employee.manager_id=? WHERE employee.id=?`;
        connection.query(query, [mgrId, empId], (err) => {
          if (err) throw err;
          console.log('employee manager updated');
          userPrompt();

        });

      });
  });
};

const remEmp = () => {

  const query = `SELECT employee.id, employee.first_name, employee.last_name FROM employee`;
  connection.promise().query(query, (err, res) => {
    if (err) throw err;
    let empArray = []:
      res.forEach((employee) => {
        empArray.push(`${employee.first_name} ${employee.last_name}`);
      });
    inquirer.prompt([
      {
        name: 'emp',
        type: 'list',
        message: 'choose the employee you want to remove',
        choices: empArray
      }
    ]).then((answer) => {
      let empId = "";
      res.forEach((employee) => {
        if (answer.emp === `${employee.first_name} ${employee.last_name}`) {
          empId = employee.id;
        }
      });
      const query = `DELETE FROM employee WHERE employee.id=?`;
      connection.query(query, [empId], (err) => {
        if (err) throw err;
        console.log('employee removed');
        viewAllEmp();
      });
    });
  });


};

const remRole = () => {
  const query = `SELECT role.id, role.role_title FROM role`;
  connection.promise().query(query, (err, res) => {
    if (err) throw err;
    let roleArray = [];
    res.forEach((role) => {
      roleArray.push(role.role_title);
    });
    inquirer
      .prompt([
        {
          name: 'roleCh',
          type: 'list',
          message: "choose the role you want to remove",
          choices: roleArray
        }
      ]).then((answer) => {
        let roleId = "";

        if (answer.roleCh === role.role_title) {
          roleId = role.id;
        }
      });
    const query = `DELETE FROM role WHERE role.id=?`;
    connection.promise().query(query, [roleId], (err) => {
      if (err) throw err;
      console.log('role removed');
      viewAllRole();
    });
  });
};

const remDept = () => {
  const query = `SELECT department.id, department.dept_name FROM department`;
  connection.promise().query(query, (err, res) => {
    if (err) throw err;
    let deptArray = [];

    res.forEach((department) => {
      deptArray.push(department.dept_name);
    });
    inquirer
      .prompt([
        {
          name: 'chDept',
          type: "list",
          message: "choose the dept you want to remove",
          choices: deptArray
        }
      ]).then((answer) => {
        let deptId = "";
        res.forEach((department) => {
          if (answer.chDept === department.dept_name) {
            deptId = department.id;
          }
        });

        const query = `DELETE FROM department WHERE department.id=?`;
        connection.promise().query(query, [deptId], (err) => {
          if (err) throw err;
          console.log('department removed')
        });

      });
  });
};
