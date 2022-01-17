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
		}
	]);
};

// function to create new README.md file
function writeToFile(fileName, data) {
	return new Promise((resolve, reject) => {
		fs.writeFile(fileName, data, err => {
			if (err) {
				reject(err);
				return;
			}
			resolve(console.log('File created successfully. Your new README.md file can be found in the dist folder within this directory.'));
		});
	});
};

// function to generate new README.md file content based on user input
promptUser().then(userInput => {
	return generateREADME(userInput)
})
.then(readmeContent => {
	writeToFile('./dist/README.md', readmeContent)
});