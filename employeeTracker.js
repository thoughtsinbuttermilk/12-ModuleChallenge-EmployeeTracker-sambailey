// dependencies
const mysql = require('mysql2');
const inquirer = require('inquirer');

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

// user prompts for the application's required actions
function promptUserAction() {
    inquirer.prompt({
        
            // user picks from the list of use cases
            name: "userAction",
            type: "list",
            message: "hello. what would you like to do?",
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
            message: "hello. what would you like to do?",
            name: "option"
        }).then(function(res) {
        console.log("we will now:" + res.option);
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
    // show the result to the user (console.table)
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
  
    connection.query(query, (err, res)=>{
      if (err) throw err;
      console.table(res);
      promptUserAction();
    });
}

function exit() {
    connection.end();
    process.exit();
}

promptUserAction();