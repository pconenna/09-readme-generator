// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
//project title, description, table of contents, installation, usage, contribution guidelines
// test instructions 
const questions = ["What is the title of the application?",
"What is the description of the application?",
"Write a table of contents.",
"How does a user install the appllication?",
"How does a user use the application?",
"What are the contribution guidlines?",
"Write test instructions."
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type:'input',
            message:questions[0],
            name: 'title'

        },
    ])
}

// Function call to initialize app
init();
