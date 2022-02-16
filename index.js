const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create a function to initialize app
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            default: 'Run Buddy',
            validate: titleInput => {
                if (titleInput) {
                    return true; 
                } else {
                    console.log('Please enter a title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description for your project',
            default: 'A personal trainer website',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a descripption');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'installation-instructions',
            message: 'Please provide installation instructions for your project',
            default: 'node'
        },
        {
            type: 'input',
            name: 'usage-info',
            message: 'Please provide usage information for your project',
            default: 'npm inquirer'
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'What licenses were used to create your project?',
            choices: ['MIT', 'GPLV3', 'Mozilla Public License 2.0']
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please explain how other users can contribute to your project',
            default: 'submit pull request'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please explain how users can test your project',
            default: 'run application in terminal'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github name',
            default: 'asiajcrew'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address',
            default: 'test@test.com'
        }
    ]);
};

// Function call to initialize app
questions()
.then(portfolioData => {
    return generateReadMe(portfolioData);
})
.then(ReadMe => {
    return writeFile(ReadMe);
})
.catch(err => {
    console.log(err)
});

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('MyProjectReadMe.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "File created!"
            });
        });
    });
};


const generateReadMe= userResponse => {
    return `${userResponse}`
};