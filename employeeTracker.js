// dependencies
const mysql = require('mysql2');
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
// const inqListInput = require('inquirer-list-input');

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
    // run the start function after the connection is made to prompt the user
    // need to call the prompts here nameOfPrompt();
    console.log("i am listening on localhost:3001");
    console.log("press ctrl+c to exit");
});

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