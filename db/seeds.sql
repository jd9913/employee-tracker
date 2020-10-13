

insert into department (dept_name) values ('Business Development');

insert into department (dept_name) values ('Product Management');

insert into department (dept_name) values ('Human Resources');
insert into department (dept_name) values ('Sales');
insert into department (dept_name) values ('Legal');
insert into department (dept_name) values ('Technology');

insert into department (dept_name) values ('Logistics');
insert into department (dept_name) values ('Operations');
insert into department (dept_name) values ('Finance');

insert into department (dept_name) values ('Planning');


insert into role (role_title, salary, description, department_id) values ('Senior Sales Associate', '$36354.50', 'aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis', 10);
insert into role (role_title, salary, description, department_id) values ('Registered Nurse', '$28395.81', 'congue diam id ornare imperdiet sapien urna pretium nisl ut', 6);
insert into role (role_title, salary, description, department_id) values ('Junior Executive', '$77098.51', 'erat id mauris vulputate elementum nullam varius nulla facilisi cras', 7);
insert into role (role_title, salary, description, department_id) values ('Systems Administrator IV', '$27892.50', 'porttitor id consequat in consequat ut nulla sed accumsan felis', 3);
insert into role (role_title, salary, description, department_id) values ('Computer Systems Analyst IV', '$61763.16', 'in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam', 7);
insert into role (role_title, salary, description, department_id) values ('Software Consultant', '$48705.23', 'amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in', 2);
insert into role (role_title, salary, description, department_id) values ('Business Systems Development Analyst', '$67242.78', 'semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat', 8);
insert into role (role_title, salary, description, department_id) values ('VP Sales', '$29324.33', 'lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat', 9);
insert into role (role_title, salary, description, department_id) values ('Social Worker', '$11895.95', 'habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo', 2);
insert into role (role_title, salary, description, department_id) values ('Senior Financial Analyst', '$26779.28', 'ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor', 5);
insert into role (role_title, salary, description, department_id) values ('Quality Control Specialist', '$24220.94', 'velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum', 10);
insert into role (role_title, salary, description, department_id) values ('VP Accounting', '$62117.25', 'pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est', 9);
insert into role (role_title, salary, description, department_id) values ('Assistant Manager', '$36769.50', 'quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat', 9);
insert into role (role_title, salary, description, department_id) values ('Assistant Professor', '$63012.94', 'bibendum morbi non quam nec dui luctus rutrum nulla tellus in', 2);
insert into role (role_title, salary, description, department_id) values ('Marketing Assistant', '$65108.45', 'cursus id turpis integer aliquet massa id lobortis convallis tortor', 5);
insert into role (role_title, salary, description, department_id) values ('Help Desk Operator', '$47877.05', 'suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut', 5);
insert into role (role_title, salary, description, department_id) values ('Technical Writer', '$49744.33', 'cras mi pede malesuada in imperdiet et commodo vulputate justo', 8);
insert into role (role_title, salary, description, department_id) values ('Database Administrator III', '$19299.44', 'sit amet cursus id turpis integer aliquet massa id lobortis convallis', 6);
insert into role (role_title, salary, description, department_id) values ('Electrical Engineer', '$62784.13', 'vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in', 1);
insert into role (role_title, salary, description, department_id) values ('Senior Sales Associate', '$39591.28', 'sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus', 6);

insert into manager (role_id) values (15);
insert into manager (role_id) values (20);
insert into manager (role_id) values (10);
insert into manager (role_id) values (19);
insert into manager (role_id) values (12);
insert into manager (role_id) values (19);
insert into manager (role_id) values (16);
insert into manager (role_id) values (6);
insert into manager (role_id) values (13);
insert into manager (role_id) values (12);
insert into manager (role_id) values (1);
insert into manager (role_id) values (7);
insert into manager (role_id) values (10);
insert into manager (role_id) values (15);
insert into manager (role_id) values (9);
insert into manager (role_id) values (1);
insert into manager (role_id) values (17);
insert into manager (role_id) values (18);
insert into manager (role_id) values (19);
insert into manager (role_id) values (6);




insert into employee (first_name, last_name, role_id, manager_id) values ('Charlotte', 'Schops', 4, 8);
insert into employee (first_name, last_name, role_id, manager_id) values ('Benoite', 'Mewis', 12, 8);
insert into employee (first_name, last_name, role_id, manager_id) values ('Angelina', 'McCromley', 13, 9);
insert into employee (first_name, last_name, role_id, manager_id) values ('Roxana', 'Chettle', 9, 2);
insert into employee (first_name, last_name, role_id, manager_id) values ('Herrick', 'Spillman', 13, 10);
insert into employee (first_name, last_name, role_id, manager_id) values ('Valentijn', 'O''Brian', 4, 9);
insert into employee (first_name, last_name, role_id, manager_id) values ('Mirella', 'Begent', 8, 6);
insert into employee (first_name, last_name, role_id, manager_id) values ('Tedd', 'Blees', 3, 5);
insert into employee (first_name, last_name, role_id, manager_id) values ('Melisa', 'Munden', 7, 9);
insert into employee (first_name, last_name, role_id, manager_id) values ('Fin', 'Carme', 4, 4);
insert into employee (first_name, last_name, role_id, manager_id) values ('Haven', 'Buddle', 12, 8);
insert into employee (first_name, last_name, role_id, manager_id) values ('Doralin', 'Jacquot', 16, 2);
insert into employee (first_name, last_name, role_id, manager_id) values ('Dulsea', 'Hendrik', 16, 1);
insert into employee (first_name, last_name, role_id, manager_id) values ('Blanca', 'Degoey', 1, 10);
insert into employee (first_name, last_name, role_id, manager_id) values ('Barb', 'Deller', 15, 10);
insert into employee (first_name, last_name, role_id, manager_id) values ('Lucias', 'Stonhouse', 3, 10);
insert into employee (first_name, last_name, role_id, manager_id) values ('Nona', 'Lampen', 17, 1);
insert into employee (first_name, last_name, role_id, manager_id) values ('Aleta', 'Bolliver', 14, 5);
insert into employee (first_name, last_name, role_id, manager_id) values ('Lu', 'Lief', 4, 4);
insert into employee (first_name, last_name, role_id, manager_id) values ('Filbert', 'Roache', 1, 1);
