
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS departments;



CREATE TABLE departments (
id INTEGER PRIMARY KEY,
dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INTEGER PRIMARY KEY,
    role_title VARCHAR(30) NOT NULL,
    salary DECIMAL(6,2) NOT NULL,
    description TEXT,
    department_id INTEGER  NOT NULL,
    FOREIGN KEY (department_id)
     REFERENCES departments(id)
);

CREATE TABLE employees (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    manager_id INTEGER NOT NULL,
    role_id INTEGER NOT NULL,
    -- CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES managers(id) ON DELETE SET NULL,
    FOREIGN KEY (role_id)
    REFERENCES roles(id),

    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
   
);

