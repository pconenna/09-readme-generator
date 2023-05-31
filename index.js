// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
//project title, description, table of contents, installation, usage, contribution guidelines
// test instructions 
const questions = ["What is the title of the application?",
"What is the description of the application?",
"How does a user install the appllication?",
"How does a user use the application?",
"What are the contribution guidlines?",
"Write test instructions."
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,
`# ${data.title}
## Description
${data.desc}
## Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#How to Contribute)
- [Testing](#testing)
## Installation
${data.installation}
## Usage
${data.usage}
## How to contribute
${data.contribution}
## Testing
${data.testing}`
    ,function(err){
        if(err) throw err;
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type:'input',
            message:questions[0],
            name: 'title'
        },
        {
            type:'input',
            message:questions[1],
            name: 'desc'
        },
        {
            type:'input',
            message:questions[2],
            name: 'installation'
        },
        {
            type:'input',
            message:questions[3],
            name: 'usage'
        },
        {
            type:'input',
            message:questions[4],
            name: 'contribution'
        },
        {
            type:'input',
            message:questions[5],
            name: 'testing'
        }
    ]).then((resposnse)=>{
        writeToFile("README_sample.md",resposnse);
    });
}

// Function call to initialize app
init();
