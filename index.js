// Packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');


// array of questions for user
const questions = [
    {
        type: 'input',
        message: "Enter your GitHub username (without the @): ",
        name: 'username',
        validate: username => {
            if (username.length < 1) {
                return console.log("Please enter a valid GitHub username");
            };
            return true;
        }
    },
    {
        type: 'input',
        message: "Please enter the title of the project: ",
        name: 'title',
        validate: title => {
            if (title.length < 1) {
                return console.log("Please enter a valid project title.");
            };
            return true;
        }
    },
    {
        type: 'input',
        message: "Please enter a project description: ",
        name: 'desc',
        validate: description => {
            if (description.length < 1) {
                return console.log("Please enter a valid project description.");
            };
            return true;
        }
    },
    {
        type: 'input',
        message: "Please enter, if applicable, the installation steps for the project: ",
        name: 'install'
    },
    {
        type: 'input',
        message: "Please provide instructions on usage and examples of how the project would be used: ",
        name: 'use'
    },
    {
        type: 'input',
        message: "If applicable, please enter how other users can contribute to the project: ",
        name: 'contr'
    },
    {
        type: 'input',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['MIT License', 'GNU GPLv2', 'Apache License', 'GNU GPL v3', 'Unlicense License', 'Apache-2.0', 'Mozilla Public License 2.0'],
        name: 'license'
    }
];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        };

        console.log ("Your README markdown file has been generated!")
    });
};

// function to initialize program
function init() {
    const userInput = inquirer.prompt(questions);
    const output = generateMarkdown(userInput)
    console.log('Generating README...')
    console.log(output);
    writeToFile('OutputREADME.md', output);  
};

// function call to initialize program
init();
