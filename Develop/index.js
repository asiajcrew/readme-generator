// TODO: Include packages needed for this application. DONE

const inquirer = require("inquirer");
const Choice = require("inquirer/lib/objects/choice");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description for your project'
        },
        {
            type: 'input',
            name: 'installation-instructions',
            message: 'Please provide installation instructions for your project'
        },
        {
            type: 'input',
            name: 'usage-info',
            message: 'Please provide usage information for your project'
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'What licenses were used to create your project?',
            choices: 'blank for now'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please explain how other users can contribute to your project'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please explain how users can test your project'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github name'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address'
        }
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
