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
  - [Installation, usage instructions and known issue](#installation-usage-instructions-and-known-issue)
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

## Installation, usage instructions and known issue

<details>
<summary> Expand for installation and usage instructions</summary>

Users or contributors can run the application locally or in a hosted environment: 

1.  **Clone the repository, run the application using the command line**

    • Clone the repository: `git@github.com:thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey.git`

    • Install required frameworks, dependencies and packages by opening a terminal instance and running `npm install`

    • [Open connections.js](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/employeeManagement/conections/connections.js) and add your SQL username, if not root, and password

    • In the `terminal`, run `npm start`, after you admire the super duper cool 'splash screen', follow the prompts 

    • Select `exit` or press `control+c` to close the application

2. **Usage instructions**
    
    After the application makes a successful connection to the database and is running in the command line, you can select an option from the list to view or update the database:

    **view all departments**

    *Expected behavior*: The note will be saved and displayed in the list on the right of the screen.

    **view all roles**
    
    *Expected behavior*: The note will be saved and displayed in the list on the left of the screen.

    **view all employees**
    *Expected behavior*: The note will be saved and displayed in the list on the left of the screen.

    **add a new department**
    *Expected behavior*: The note will be saved and displayed in the list on the left of the screen.

    **add a new role**
    *Expected behavior*: The note will be saved and displayed in the list on the left of the screen.

    **add a new employee**
    *Expected behavior*: The note will be saved and displayed in the list on the left of the screen.

    **update an employee's role**
    *Expected behavior*: The note will be saved and displayed in the list on the left of the screen.

    **remove an employee from the database**
    *Expected behavior*: The note will be saved and displayed in the list on the left of the screen.

    **exit the application**
    *Expected behavior*: The note will be saved and displayed in the list on the left of the screen.


    *Known issues*
    • When editing an existing note, the "write" icon does not appear in the upper right corner of the application window. This issue is cosmetic, notes can still be edited by placing the cursor in the title or text fields and pressing the "save" icon. This issue needs be investigated, I need to more closely examine the starter code for the front-end, and addressed in the 1.v1 release of the application.

    • After editing a note, the original text will display in the main window. I believe I need to add a `e.stopPropagation();` method to resolve this issue. It will be addressed in the 1.v1 release of the application.
xw
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
