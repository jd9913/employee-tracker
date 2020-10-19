

insert into department (dept_name)
values ('Business Development'),
 ('Product Management'),
 ('Human Resources'),
 ('Sales'),
('Legal'),
 ('Technology'),
('Logistics'),
 ('Operations'),
 ('Finance'),
 ('Planning');


insert into role (role_title, salary, description, department_id)
 values
 ('Manager', '$86354.50', 'aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis', 10),

('Registered Nurse', '$28395.81', 'congue diam id ornare imperdiet sapien urna pretium nisl ut', 6),
('Junior Executive', '$77098.51', 'erat id mauris vulputate elementum nullam varius nulla facilisi cras', 7),
 ('Systems Administrator IV', '$27892.50', 'porttitor id consequat in consequat ut nulla sed accumsan felis', 3),
 ('Computer Systems Analyst IV', '$61763.16', 'in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam', 7),
 ('Software Consultant', '$48705.23', 'amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in', 2),
 ('Business Systems Development Analyst', '$67242.78', 'semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat', 8),
 ('VP Sales', '$29324.33', 'lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat', 9),
 ('Social Worker', '$11895.95', 'habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo', 2),
('Senior Financial Analyst', '$26779.28', 'ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor', 5),
 ('Quality Control Specialist', '$24220.94', 'velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum', 10),
('VP Accounting', '$62117.25', 'pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est', 9),
 ('Assistant Manager', '$36769.50', 'quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat', 9),
 ('Assistant Professor', '$63012.94', 'bibendum morbi non quam nec dui luctus rutrum nulla tellus in', 2),
 ('Senior Associate', '$65108.45', 'cursus id turpis integer aliquet massa id lobortis convallis tortor', 5),
 ('Help Desk Operator', '$47877.05', 'suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut', 5),
 ('Technical Writer', '$49744.33', 'cras mi pede malesuada in imperdiet et commodo vulputate justo', 8),
 ('Database Administrator III', '$19299.44', 'sit amet cursus id turpis integer aliquet massa id lobortis convallis', 6),
 ('Electrical Engineer', '$62784.13', 'vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in', 1),
 ('Senior Sales Associate', '$39591.28', 'sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus', 6);



insert into employee (first_name, last_name, role_id, manager_id)
 values 
 ('Charlotte', 'Schops', 4, 8),
 ('Benoite', 'Mewis', 12, 8),
('Angelina', 'McCromley', 13, 9),
('Roxana', 'Chettle', 9, 2),
('Herrick', 'Spillman', 13, 10),
('Valentijn', 'O''Brian', 4, 9),
('Mirella', 'Begent', 8, 6),
('Tedd', 'Blees', 3, 5),
('Melisa', 'Munden', 7, 9),
('Fin', 'Carme', 4, 4),
('Haven', 'Buddle', 12, 8),
('Doralin', 'Jacquot', 16, 2),
('Dulsea', 'Hendrik', 16, 1),
('Blanca', 'Degoey', 1, 10),
('Barb', 'Deller', 15, 10),
('Lucias', 'Stonhouse', 3, 10),
('Nona', 'Lampen', 17, 1),
('Aleta', 'Bolliver', 14, 5),
('Lu', 'Lief', 4, 4),
('Filbert', 'Roache', 1, 1);
