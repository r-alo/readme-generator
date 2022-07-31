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
function generateMarkdown(data) {
  
  return `# ${data.projectTitle}
### Table of Contents
**[Description](#description)**<br>x
**[Installation](#installation)**<br>
**[Usage](#usage)**<br>
**[Licenses](#licensew)**<br>
**[Contribution](#contribution)**<br>
**[Testing](#testing)**<br>
**[Contact Info](#contact-info)**<br>

  ## Description
  ${data.description}

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Project's Licenses
  ${data.gitList}.splice()

  ## Contribution
  ${data.contribute}

  ##Testing project
  ${data.testing}
  
  ## Contact info
  - [${data.gitUser}](https://github.com/${data.gitUser})
  - [${data.mail}](mailto:${data.mail})
`;
}

module.exports = generateMarkdown;
