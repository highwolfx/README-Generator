// function to generate markdown for README
function generateMarkdown(userInput) {
  // License badges
  let licenseURL;
  switch (userInput.license) {
    case 'MIT License':
      licenseURL = 'https://img.shields.io/badge/License-MIT-yellow.svg';
      break;
    case 'GNU GPL v2':
      licenseURL = 'https://img.shields.io/badge/License-GPL%20v2-blue.svg';
      break;
    case 'GNU GPL v3':
      licenseURL = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
      break;
    case 'GNU AGPL v3':
      licenseURL = 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg';
      break;
    case 'Apache 2.0 License':
      licenseURL = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
      break;
    case 'Mozilla Public License 2.0':
      licenseURL = 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg';
      break;
    case 'Unlicense License':
      licenseURL = 'https://img.shields.io/badge/license-Unlicense-blue.svg';
      break;
  };


  // Markdown Output top bar
  let markdownOutput = 
  `# ${userInput.title}

  ![License Badge](${licenseURL})


  ## Description

  ${userInput.desc}
  
  
  `;


  // Table of Contents
  let tableC =

  `## Table of Contents
  
  `;
  if (userInput.install !== ''){
    tableC += `
    * [Installation](#installation)`
  };
  if (userInput.use !== ''){
    tableC += `
    * [Usage](#usage)`
  };
  if (userInput.contr !== ''){
    tableC += `
    * [Contributing ](#contributing)`
  };
  if (userInput.tests !== ''){
    tableC += `
    * [Tests](#tests)`
  };
  if (userInput.license !== ''){
    tableC += `
    * [License](#license)`
  };
  

  // Adds Table of Contents to Output
  markdownOutput += tableC;


  // Optional Installation section
  if (userInput.install !== ''){
    markdownOutput +=
  `
  
  ## Installation

  *Instructions on installation:*

  ${userInput.install}`
  };


  // Optional Usage section
  if (userInput.use !== ''){
    markdownOutput +=
  `
  
  ## Usage

  *Instructions on usage and use examples:*

  ${userInput.use}`
  };


  // Optional Contribution section
  if (userInput.contr !== ''){
    markdownOutput +=
  `
  
  ## Contribution

  *If you wish to contribute to the project, here are some guidelines to follow.*

  ${userInput.contr}`
  };


  // Optional Tests section
  if (userInput.tests !== ''){
    markdownOutput +=
  `
  
  ## Tests

  *Tests for the application and instructions on how to run them:*

  ${userInput.tests}`
  };
  

  //License section
  markdownOutput +=
  `
  
  ## License

  The application is licensed under the ${userInput.license}.`;


  // Questions section
  markdownOutput +=
  `

  ---

  ## Questions?

  For any questions, contact me at the information below:

  GitHub: [${userInput.username}](https://github.com/${userInput.username})
  
  Email: ${userInput.email}
  `;

  return markdownOutput;
};

module.exports = generateMarkdown;
