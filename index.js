// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")
// TODO: Create an array of questions for user input
//project title, description, table of contents, installation, usage, contribution guidelines
// test instructions 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //this is going to need imports from generate markdown
    fs.writeFile(fileName,data,function(err){
        if(err) throw err;
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type:'input',
            message:"What is the title of the application?",
            name: 'title'
        },
        {
            type:'input',
            message:"What is the description of the application?",
            name: 'desc'
        },
        {
            type:'input',
            message:"How does a user install the appllication?",
            name: 'installation'
        },
        {
            type:'input',
            message:"How does a user use the application?",
            name: 'usage'
        },
        {
            type:'input',
            message:"What are the contribution guidlines?",
            name: 'contribution'
        },
        {
            type:'input',
            message:"Write test instructions.",
            name: 'testing'
        },
        {
            type: 'checkbox',
            message: 'Choose a license.',
            choices: ["Apache 2.0","Boost Software License 1.0","MIT License","Mozilla Public License 2.0"],
            name: 'license'
        }
    ]).then((resposnse)=>{
        renderLicesnce 
        writeToFile("README_sample.md",generateMarkdown(resposnse));
    });
}

// Function call to initialize app
init();


