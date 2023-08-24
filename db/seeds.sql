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

INSERT INTO employee (first_name, last_name, role_id)
VALUES 
("Joplin", "Janice", 1), 
("King", "Carole", 2), 
("Franklin", "Aretha", 7),
("O'Connor", "Sinead", 7), 
("Smith", "Patty", 5), 
("Smith", "Bessie", 7), 
("Bush", "Kate", 4), 
("Turner", "Tina", 3), 
("Harry", "Debra", 2),
("Parton", "Dolly", 7), 
("Khan", "Chaka", 8),
("Baker", "LaVerne", 7),
("Blige", "Mary J.", 8),
("Ross", "Diana", 1);


 