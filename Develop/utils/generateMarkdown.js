// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GPL 3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'BSD 3-Clause': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    'None': ''
  };
  return badges[license] || '';
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const link = `[${license}](https://opensource.org/licenses/${license})`
  
  return link;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return 'This project is not licensed.';
  }
  return `Distributed under the ${renderLicenseLink(license)} License.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  function formatText (text) {
    const formattedText=text.replace(/\\n/g, '\n');
    return formattedText;
  };
  function convertToOrderedList(text) {
    // Split the text by new lines
    const lines = text.split('\\').filter(line => line.trim() !== '');
    // Format each line as an ordered list item
    newLines=lines.map((line, index) => `${index + 1}. ${line}`).join('\n');
    return newLines;
   
  }

  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

## Description 
${formatText(data.description)}

## Table of contents 
- [Key  features](#key-features)
- [Installation instructions](#installation-instructions)
- [Usage](#usage)
- [License](#license)
- [How to contribute](#how-to-contribute)
- [Tests](#tests)
- [Contact info](#contact-info)

## Key Features
${convertToOrderedList(data.features)}

## Installation instructions
${convertToOrderedList(data.installation)}


## Usage 

Please follow the link to review the usage guide:
[Professional README generator usage-guide](${data.usage})


## License
${renderLicenseSection(data.license)}

## How to contribute
${data.contributing}

## Tests
${data.tests}

## Contact info
If you have any questions, suggestions, or need support, feel free to reach out through the following channels:

- **Email**: [${data.email}](mailto:${data.email})
- **GitHub**: [@${data.github}](https://github.com/${data.github})

`;
}; 
module.exports = generateMarkdown;
