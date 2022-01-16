// Included npm packages/modules
const inquirer = require('inquirer');
const fs = require('fs');

// Included local modules
const generateREADME = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter the name of your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project. (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions for your project.',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter usage information for your project.',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter contribution guidelines for your project.',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter test instructions for your project.',
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for your project',
        choices: ['MIT', 'BSD', 'GNU']
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your GitHub Username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',

      },

    ]);
    
  };
  
  promptUser().then(console.log);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
// promptUser()
//   .then(portfolioData => {
//     const pageHTML = generatePage(portfolioData);

//     fs.writeFile('./index.html', pageHTML, err => {
//       if (err) throw new Error(err);

//       console.log('Page created! Check out index.html in this directory to see it!');
//     });
//   })
function init() {}


// Function call to initialize app
init();
