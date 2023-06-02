
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == null){return ""}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == null){return ""}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == null){return ""}
}




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}
  ## Description
  ${data.desc}

  ## Table of contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [How to Contribute](#contribute)
  - [Testing](#testing)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribute
  ${data.contribution}

  ## Testing
  ${data.testing}

`;
}

module.exports = generateMarkdown;
