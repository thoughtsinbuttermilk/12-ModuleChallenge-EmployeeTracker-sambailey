# 12 ModuleChallenge EmployeeTracker sambailey

Northwestern Bootcamp challenge week 12

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)

![javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

![npm](https://img.shields.io/npm/v/npm.svg?logo=npm)

# Table of Contents

- [12 ModuleChallenge EmployeeTracker sambailey](#12-modulechallenge-employeetracker-sambailey)
- [Table of Contents](#table-of-contents)
  - [Project description](#project-description)
  - [Application functionality](#application-functionality)
  - [Technology used](#technology-used)
  - [Installation, usage instructions and known issues](#installation-usage-instructions-and-known-issues)
  - [Testing](#testing)
  - [Video walkthroughs](#video-walkthroughs)
  - [Screen captures](#screen-captures)
  - [Credits and notes for the graders](#credits-and-notes-for-the-graders)

## Project description

The intent of this project was to build a simple, command line interface to an employee database. 

## Application functionality

When the application is run from the command line, the user can:

• view all departments

• view all roles

• view all employees

• add a new department

• add a new role

• add a new employee

• update an employee's role

• remove an employee from the database

• exit the application

## Technology used

The application was built using:

[node.js, v20.5.0](https://nodejs.org/en), an asynchronous, event-driven JavaScript runtime designed to build scalable network applications

[MySql, v2.1.0](https://dev.mysql.com/doc/refman/8.1/en/), the world's *most popular* open source database

[npm's inquirer package, v8.2.6](https://www.npmjs.com/package/inquirer), including the list-input feature and maxlength-input method

[npm's cfonts package, v3.2.0](https://www.npmjs.com/package/cfonts), a silly little command line tool for *sexy* ANSI fonts in the console

[npm's console table package, v0.10.0](https://www.npmjs.com/package/console.table), supports passing multiple strings and arrays in a single console.table call; each argument will be formatted and printed separately on new line

## Installation, usage instructions and known issues

<details>
<summary> Expand for installation and usage instructions</summary>

Users or contributors can run the application locally or in a hosted environment: 

1.  **Clone the repository, run the application using the command line**

    • Clone the repository: `git@github.com:thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey.git`

    • Install required frameworks, dependencies and packages by opening a terminal instance and running `npm install`

    • [Open connections.js](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/employeeManagement/conections/connections.js) and add your SQL username, if not root, and password

    • Open the sources in your favorite code editor and use your favorite tool to open a connection to you MySql server

    • [Open and execute the schema](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/2998f381bef1e6509b0e622bc35c9a5abb662197/db/schema.sql)

    • [Open the seeds file and seed the database with the initial values](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/2998f381bef1e6509b0e622bc35c9a5abb662197/db/seeds.sql)

    • In the `terminal`, navigate to the project directory where you cloned the sources, and run `npm start`
    
    • After you admire the super duper cool 'splash screen', follow the prompts 

    • Select `exit` or press `control+c` to close the application

2. **Usage instructions**
    
    After the application makes a successful connection to the database and is running in the command line, you can select an option from the list to view or update the database:

    **main menu**

    *Expected behavior:* After running `npm start` in  the command line, the user should be presented with the [the super duper cool 'splash screen'!!!](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/01-splashscreen.png) and the application's [main menu](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/02-mainmenu.png)

    **view all departments**

    *Expected behavior:* Select `view all departments` and you will be presented with the [default departments](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/03-viewalldepartments.png) inserted into the database.

    **view all roles**
    
    *Expected behavior:* Select `view all roles` and you will be presented with the [default roles](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/04-viewallroles.png) inserted into the database.

    **view all employees**
    
    *Expected behavior:* Select `view all employees` and you will be presented with the [default roles](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/05-viewallemployees.png) inserted into the database.

    **add a new department**
    
    *Expected behavior:* Select `add department` and you [prompted for the department name](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/06-addadepartment-INTERNS.png), after pressing enter the new department will be added to the database [intern department inserted into the database](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/07-adddepartment-RESULT.png).

    **add a new role**

    *Expected behavior:* Select `add role` and you [prompted for the new role's name, salary and department id](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/08-addarole.png), after entering the data for the  new role, it will be added to the database [social media manager role, salary and id inserted into the database](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/09-addarole-RESULT.png).

    **add an employee**

    *Expected behavior:* Select `add an employee` and you [prompted for the employee's first name, last name, the role number, and manager id](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/10-addemployee.png), after entering the data for the  new role, it will be added to the database [new employee "Linda Ronstadt" added to the database](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/11-addemployee-RESULT.png).

    **update an employee's role**

    *Expected behavior:* Select `update an employee role` and you [prompted for the employee's first name and new role number](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/12-updateemployeerole.png), after entering the data for the  new role, it will be added to the database [employee Linda Ronstadt, formerly an Auditor, is now a Studio Engineer ](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/13-updateemployeerole-RESULT.png).

    **remove an employee from the database**

    *Expected behavior:* Select `remove an employee from the database` and you [presented with a list of current employees](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/14-removeemployee.png), after selecting the employee to remove, the employee will be removed from the database [the employee "Mary J. Blige" has been removed from the database](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/15-removeemployee-RESULT.png).

    **exit the application**

    *Expected behavior:* [Select 'exit'](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/16-exit.png), after pressing "enter" the connection to the database will be closed and [the application will stop running](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/17-exit-RESULT.png).


    ***Known issues***

    • When the application starts, the first message displayed in the console is duplicated.
    
    • Fields which require numeric values are not being validated; the application will throw if a non-numeric value is entered.
    
    • More generally, new data entered into the database is not validated.
    
    • I have only enabled support for the `delete employee` feature listed in the project "bonus" section; the other "bonus" features have not been implemented.

    </details>

## Testing

The 1.0 version of this application does not have any unit tests.

## Video walkthroughs

Please see [this video](https://drive.google.com/file/d/1efinYow4UgIfIJYJ8JEltp5H_yH8F5zN/view?usp=sharing) for a demonstration of installing the application, running locally and using the application.

Please see [this video](https://drive.google.com/file/d/1aDDjwtwXzxJPFkJf6fpb-a5cuLckBWaz/view?usp=sharing) for a demonstration of running the application [deployed and hosted in Heroku](https://modulechallenge11-note-taker-ff941a52a963.herokuapp.com/).

## Screen captures

A [screen capture](https://github.com/thoughtsinbuttermilk/11-ModuleChallenge-NoteTaker-sambailey/blob/9dcc2ace7e8cddd990c483469cfba45e9a9d121f/screencaptures/defaultstate.png)of the application after launch with a default note.

A [screen capture](https://github.com/thoughtsinbuttermilk/11-ModuleChallenge-NoteTaker-sambailey/blob/268a0d72336e3e2d229e71fb7d5e02e0c39df240/screencaptures/notesadded.png) of the application after a new notes have been added to the database.

A [screen capture](https://github.com/thoughtsinbuttermilk/11-ModuleChallenge-NoteTaker-sambailey/blob/9dcc2ace7e8cddd990c483469cfba45e9a9d121f/screencaptures/notedeleted.png) of the application after the a note has been deleted from the database.

## Credits and notes for the graders

I would like to thank my Northwestern Bootcamp instructor, [NikkiTheBugSlayer](https://github.com/NikkiTheBugSlayer) for her exceptional investments to ensure our cohort is able to understand and learn the concepts taught during this coursework. Our teaching assistants, especially Jess, at TA who is subbing in this week, for your review of this assignment.  _Thank-you._

Grading team: I appreciate that I have probably twice as many as many commits across all of my branches as lines of new code written!
