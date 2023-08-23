// dependencies
const mysql = require('mysql2');
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')

// const inqListInput = require('inquirer-list-input');

// DONE: i am presented with a FORMATTED TABLE
// find a module that will format the table in the console
const cTable = require('console.table');

// TODO:
// when i choose to view all departments
// then i am presented with a formatted table showing department names and department ids

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: "3001",
    user: "root",
    password: "BHogn_53",
    database: "employee_tracker"
})

connection.connect(function (err) {
    if (err) throw err;
});

// if we manages to connect and start, then tell the user how to quit
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

function promptUserAction() {
    inquirer.prompt([
        {
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
        console.log(res.userAction);
        switch (res.userAction) {
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
            case "exit":
                connection.end();
                break;
        }

    }).catch((err) => {
        console.log(err);
        if (err) throw err;
    });
}

promptUserAction();