//generates README page content
function generateREADME(userInput) {
  return `
  # ${userInput.title}
  ![Github license](http://img.shields.io/badge/license-${userInput.license}-blue.svg)

  ## Description
  ${userInput.description}
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions) 

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
  This project is licensed under ${userInput.license} ${new Date().getFullYear()}
`;
}

module.exports = generateREADME

