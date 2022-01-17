// Included npm packages/modules
const inquirer = require('inquirer');
const fs = require('fs');

// Included local modules
const generateREADME = require('./utils/generateMarkdown');

// questions for user input
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
        name: 'usage',
        message: 'Enter usage information for your project.',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines for your project.',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions for your project.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project',
        choices: ['MIT', 'ISC', 'MPL_2.0', 'AGPL_v3', 'Apache_2.0', 'Unlicense']
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

promptUser()
  .then(userInput => {
    const readmeContent = generateREADME(userInput);

    fs.writeFile('./README.md', readmeContent, err => {
      if (err) throw new Error(err);

      console.log('README file generated. Check out README.md in this directory to see it!');
    });
  })

