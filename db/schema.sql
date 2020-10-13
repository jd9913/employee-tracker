CREATE TABLE department (
id INTEGER PRIMARY KEY,
dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INTEGER PRIMARY KEY,
    role_title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER department_id
);

CREATE TABLE employee (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER role_id,
    manager_id INTEGER manager_id
);

CREATE TABLE manager (
    id INTEGER PRIMARY KEY,
    role_id INTEGER role_id,
    employee_id INTEGER employee_id,
);