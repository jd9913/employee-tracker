DROP DATABASE IF EXISTS tracker.db;
CREATE DATABASE tracker.db;
USE tracker.db;


CREATE TABLE departments (
id INTEGER PRIMARY KEY,
dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INTEGER PRIMARY KEY,
    role_title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    description TEXT,
    department_id INTEGER UNSIGNED,
    CONSTRAINT fk_departments FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL
);

CREATE TABLE managers (
    id INTEGER PRIMARY KEY,
    role_id INTEGER UNSIGNED,
    employee_id INTEGER UNSIGNED,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES  roles(id) ON DELETE SET NULL
   
);

CREATE TABLE employees (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    manager_id INTEGER UNSIGNED,
    role_id INTEGER UNSIGNED,
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES managers(id) ON DELETE SET NULL,
    
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL

    
);

CREATE TABLE salary(
    id INTEGER PRIMARY KEY,
    employee_id INTEGER UNSIGNED NOT NULL,
    salary_id INTEGER UNSIGNED NOT NULL
    CONSTRAINT uc_employee UNIQUE (employee_id),
    CONSTRAINT fk_employee FOREIGN KEY (employee_id) REFERENCES employees(id) ON DELETE CASCADE,
    CONSTRAINT fk_salary FOREIGN KEY (salary_id)REFERENCES roles(id) ON DELETE NULL
);
