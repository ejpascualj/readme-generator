// packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");


// array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter title of the project"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description of the project, explaining the what, why and how."
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage information"
    },
    {
        type: "list",
        name: "license",
        message: "Select the type of license",
        choices: ["None", "MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "MPL 2.0"]
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter contribution guidelines"
    },
    {
        type: "input",
        name: "test",
        message: "Enter test instructions"
    },    
    {
        type: "input",
        name: "username",
        message: "Enter Github Username"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address"
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data), error => {
        console.log("Generating README");
        if (error) throw error;
        console.log("README generated.");
    });
    
}

// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answers){
        writeToFile("README.md", answers);
    })
    .catch(function(error){
        console.log(error);
    })
}

// Function call to initialize app
init();
