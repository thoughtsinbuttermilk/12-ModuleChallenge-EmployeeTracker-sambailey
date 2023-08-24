// dependencies
const mysql = require('mysql2');
const inquirer = require('inquirer');
// for later: limit the console input to the value of the VARCHAR(30) in the db schema
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')

// const inqListInput = require('inquirer-list-input');

// use case: i am presented with a FORMATTED TABLE
// DONE: find a module that will format the table in the console
const cTable = require('console.table');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

// open a connection to the database
const connection = mysql.createConnection({
    host: "8.0.33",
    port: "3306",
    // your username
    user: "root",
    // your password
    password: "BHogn_53",
    database: "employee_tracker"
});

// this function will be called when the connection is made to the server
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

    promptUserAction();
});

// tell the user how to quit the application
console.log("press ctrl+c to exit\n");

// TODO: required use cases:
// i am presented with the following options:
// view all departments
// view all roles
// view all employees
// add a department
// add a role
// add an employee
// update an employee role

// user promopts for the application's required actions
function promptUserAction() {
    inquirer.prompt([
        {
            // pick list of options
            name: "userAction",
            type: "list",
            message: "hello. what would you like to do?",
            choices: [
                "view all departments",
                "view all roles",
                "view all employees",
                "add a department",
                "add a role",
                "add an employee",
                "update an employee role",
                "exit"
            ]
        }

    ]).then((res) => {
        console.log(res.promptUserAction);
        switch (res.promptUserAction) {
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
    // show the result to the user (console.table)
}
function exit() {
    connection.end();
    process.exit();
}

promptUserAction();