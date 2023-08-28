// dependencies
const mysql = require('mysql2');
const inquirer = require('inquirer');
// a silly little command line tool for sexy ANSI fonts in the console
// https://www.npmjs.com/package/cfonts
const cfonts = require('cfonts');

// connect to the database
const connection = require('./conections/connections');

// message prompts for user interaction
const prompts = require("./messagePrompts");

// for later: limit the console input to the value of the VARCHAR(30) in the db schema
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')

// const inqListInput = require('inquirer-list-input');

// use case: i am presented with a FORMATTED TABLE
// DONE: find a module that will format the table in the console
const cTable = require('console.table');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

cfonts.say('hello!\ni am the\nemployee\ntracker', {
    font: 'simpleBlock',
    align: 'left',
    colors: ['blue'],
    background: 'transparent',
    letterSpacing: 1,
    lineHeight: 1,
    space: true,
    maxLength: '0',
    gradient: false,
    independentGradient: false,
    transitionGradient: false,
    env: 'node'
});

// tell the user how to quit the application
console.log("\nto exit the application\nselect exit from the menu\nor press ctrl+c\n");

// start user interaction
// promptUserAction();

// user prompts for the application's required actions
// not using arrow functions because i want to refactor and modularize the code later
function promptUserAction() {
    inquirer.prompt({
        // user picks from the list actions
        name: "userAction",
        type: "list",
        message: "hello. what would you like to do?",
        name: "option",
        choices: [
            prompts.viewAllDepartments,
            prompts.viewAllRoles,
            prompts.viewAllEmployees,
            prompts.addDepartment,
            prompts.addRole,
            prompts.addEmployee,
            prompts.updateEmployeeRole,
            prompts.exit
        ],
    }).then(function (res) {
        console.log("\nwe will now:\n" + res.option + "\n");
        switch (res.option) {
            case "view all departments":
                viewAllDepartments();
                break;
            case "view all roles":
                viewAllRoles();
                break;
            case "view all employees":
                viewAllEmployees();
                break;
            case "add a department":
                addDepartment();
                break;
            case "add a role":
                addRole();
                break;
            case "add an employee":
                addEmployee();
                break;
            case "update an employee role":
                updateEmployeeRole();
                break;
            default: exit();
        }

    }).catch((err) => {
        console.log(err);
        if (err) throw err;
    });
}

function viewAllDepartments() {
    // select from the db
    let query = "SELECT * FROM department";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        promptUserAction();
    });
}

function viewAllRoles() {
    // select from the db
    let query = "SELECT * FROM role";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        promptUserAction();
    });
}

function viewAllEmployees() {
    let query =
        `SELECT 
        employee.id, 
        employee.first_name, 
        employee.last_name, 
        role.title, 
        department.name AS department, 
        role.salary, 
        CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee
    LEFT JOIN role
        ON employee.role_id = role.id
    LEFT JOIN department
        ON department.id = role.department_id
    LEFT JOIN employee manager
        ON manager.id = employee.manager_id`

    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        promptUserAction();
    });
}

function addDepartment() {
    inquirer.prompt({
        // VARCHAR(30) and NOT NULL so using maxlength-input to constrain user input
        type: "maxlength-input",
        maxLength: 30,
        message: "enter the name of the new department",
        name: "departmentName"
    }).then(function (answer) {
        connection.query("INSERT INTO department (name) VALUES (?)", [answer.departmentName], function (err, res) {
            if (err) throw err;
            console.table(res)
            promptUserAction()
        })
    })
}

function addRole() {
    inquirer
        .prompt([
            {
                type: "maxlength-input",
                maxLength: 30,
                message: "enter the name of the new role:",
                name: "roleName"
            },
            {
                type: "maxlength-input",
                maxLength: 30,
                message: "enter the salary of the new role:",
                name: "salaryTotal"
            },
            {
                type: "maxlength-input",
                maxLength: 30,
                message: "enter the department id of the new role?",
                name: "departmentID"
            }
        ])
        .then(function (answer) {
            connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.roleName, answer.salaryTotal, answer.departmentID], function (err, res) {
                if (err) throw err;
                console.table(res);
                promptUserAction();
            });
        });
}

function addEmployee() {
    inquirer
        .prompt([
            {
                type: "maxlength-input",
                maxLength: 30,
                message: "enter the first name of the employee:",
                name: "eeFirstName"
            },
            {
                type: "maxlength-input",
                maxLength: 30,
                message: "enter the last name of the employee:",
                name: "eeLastName"
            },
            {
                type: "maxlength-input",
                maxLength: 30,
                message: "enter the role number of the employee:",
                name: "roleID"
            },
            {
                type: "maxlength-input",
                maxLength: 30,
                message: "enter the manager id for the new employee:",
                name: "managerID"
            }
        ])
        .then(function (answer) {


            connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.eeFirstName, answer.eeLastName, answer.roleID, answer.managerID], function (err, res) {
                if (err) throw err;
                console.table(res);
                promptUserAction();
            });
        });
}

function exit() {
    connection.end();
    process.exit();
}

promptUserAction();