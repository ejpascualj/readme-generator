// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `[${license} license](https://img.shields.io/badge/License-${license}-blue.svg)`;
  } else {
    return '';
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `* [License](#license)\n`;
  } else {
    return '';
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
  return `## License

  Licensed under the ${license} license.

  `;
  } else {
    return '';
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}
${renderLicenseBadge(data.license)}


## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation

${data.installation}

## Usage
  
${data.usage}


${renderLicenseSection(data.license)}


## Contributing
  
${data.contribution}

## Tests

${data.test}

## Questions

For questions, please contact ${data.email}.
For other projects, visit: [${data.username}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
