// dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
const inqListInput = require('inquirer-list-input');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

promptUser();