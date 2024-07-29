// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown=require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Please enter your project title:",
        name:"title"
    },
    {
        type: "input",
        message: "Please enter your project description (use \\\\n to move on a new line):",
        name:"description"
    },
    {
        type: "input",
        message: "What are the key features of your project? (type \\\\ after each feature)",
        name:"features"
    },
    {
        type: "input",
        message: "How should your application be installed? (type \\\\ after each installation step)",
        name:"installation"
    },
    {
        type: "input",
        message:"Please provide a link to demo video of how to use your application",
        name:"usage"
    },
    {
        type: "list",
        message: "What license did you use?",
        name:"license",
        choices: ["Apache", "GNU General v3.0", "MIT", "BSD 2-Clause", "BSD 3-Clause", "Boost Software", "Creative Commons Zero", "Eclipse", "GNU Affero", "GNU General v2.0", "GNU Lesser", "Mozilla", "The Unlicense"]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please provide instructions how to test your application (use \\n to simulate a new line):',
      },
    {
        type: "input",
        message: "Please provide your GitHub username (without @)",
        name:"github"
    },
    {
        type: "input",
        message: "Please provide your e-mail address",
        name:"email"
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>
    err ? console.error(err) : console.log('README.md successfully created!')
);
}

function init() {
    inquirer.prompt(questions)
    .then((data) => {
      const markdown = generateMarkdown(data);
      writeToFile('README.md', markdown);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

init();