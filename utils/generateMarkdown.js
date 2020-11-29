// function to generate markdown for README
function generateMarkdown(userInput) {
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

  let markdownOutput = 
  `# ${userInput.title}

  ![License Badge](${licenseURL})


  ## Description

  ${userInput.desc}
  
  
  `;

  let tableC =

  `## Table of Contents
  
  *[License](#license)
  `;
  if (userInput.install !== ''){
    tableC += `
    *[Installation](#installation)`
  };
  if (userInput.use !== ''){
    tableC += `
    *[Usage](#usage)`
  };
  if (userInput.contr !== ''){
    tableC += `
    *[Contributing ](#contributing)`
  };
  if (userInput.tests !== ''){
    tableC += `
    *[Tests](#tests)`
  };

  markdownOutput += 
  `
  
  `
  return markdownOutput;
}

module.exports = generateMarkdown;
