
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS department;



CREATE TABLE department (
id INTEGER PRIMARY KEY,
dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INTEGER PRIMARY KEY,
    role_title VARCHAR(30) NOT NULL,
    salary DECIMAL(6,2) NOT NULL,
    description TEXT,
    department_id INTEGER  NOT NULL,
    FOREIGN KEY (department_id)
     REFERENCES departments(id)
);

CREATE TABLE employee (
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

