// dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
const inqListInput = require('inquirer-list-input');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: "8080",
    user: "smbailey",
    password: "BHogn_1953",
    database: "employee_tracker"
})

connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    // need to call the prompts here nameOfPrompt();
});

promptUser();