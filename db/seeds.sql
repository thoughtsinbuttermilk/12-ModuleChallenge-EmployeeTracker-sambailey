USE employee_tracker;

INSERT INTO department (name)
VALUES 
("Studio Management"),
("Marketing Representative"), 
("Artist Manager"), 
("Studio Engineer"), 
("Accountant"),
("Artist");

INSERT INTO role (title, salary, department_id)
VALUES 
("Studio Head", 300000.00, 1), 
("Sr. Marketing Manager", 150000.00, 2), 
("Talent Manager", 150000.00, 3),
("Sr. Engineer", 90000.00, 4), 
("Jr. Engineer", 90000.00, 4), 
("Auditor", 125000.00, 5), 
("Lead Singer", 170500.00, 6), 
("Backup Singer", 160000.00, 6);

INSERT INTO employee (last_name, first_name, role_id, manager_id)
VALUES 
("Joplin", "Janice", 3, 1), 
("King", "Carole", 2, 1), 
("Franklin", "Aretha", 7, 1),
("O'Connor", "Sinead", 7, 3), 
("Smith", "Patty", 5, 3), 
("Smith", "Bessie", 7, 1), 
("Bush", "Kate", 4, 1), 
("Turner", "Tina", 3, 1), 
("Harry", "Debra", 2, 1),
("Parton", "Dolly", 7, 3), 
("Khan", "Chaka", 8, 3),
("Baker", "LaVerne", 7, 2),
("Blige", "Mary J.", 3, 2),
("Ross", "Diana", 1, 1);


 