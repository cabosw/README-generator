// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateREADME(userInput) {
  return `
  # ${userInput.title}

  ## Description
  ${userInput.description}
  
  ## Table of Contents
  - [Description](#description)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions) 

  ## Installation
  ${userInput.installation}

  ## Contributing
  ${userInput.contribution}
  
  ## Tests
  ${userInput.tests}

  ## Questions
  For any questions you can email me at ${userInput.email}
  See more of my projects at https://github.com/${userInput.github}

  ## License 
  This project is licensed under ${userInput.license}
`;
}

module.exports = generateREADME;
