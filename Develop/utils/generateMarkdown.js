// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  return {
    'Apache license 2.0': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg' ,
    'Artistic license 2.0': 'https://img.shields.io/badge/License-Artistic_2.0-green.svg',
    'Boost Software License 1.0': 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
    'BSD 3 - clause Clear license': 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
    'Creative Commons Zero v1.0 Universal': 'https://licensebuttons.net/l/zero/1.0/80x15.png',
    'Creative Commons Attribution 4.0 International': 'https://licensebuttons.net/l/by/4.0/80x15.png',
    'Do What The F * ck You Want To Public License': 'https://img.shields.io/badge/License-WTFPL-blueviolet.svg',
    'Educational Community License v2.0': 'https://img.shields.io/badge/License-ECL_2.0-lightblue.svg',
    'Eclipse Public License 2.0': 'https://img.shields.io/badge/License-EPL_2.0-red.svg',
    'European Union Public License 1.1': 'https://img.shields.io/badge/License-EUPL_1.1-green.svg',
    'GNU Affero General Public License v3.0': 'https://img.shields.io/badge/License-AGPL_v3-blue.svg',
    'GNU General Public License v3.0': 'https://img.shields.io/badge/License-GPL_v3-blue.svg',
    'GNU Lesser General Public License v3.0': 'https://img.shields.io/badge/License-LGPL_v3-blue.svg',
    'ISC': 'https://img.shields.io/badge/License-ISC-oragne.svg',
    'LaTeX Project Public License v1.3c': 'https://img.shields.io/badge/License-LPPL_1.3-lightgreen.svg',
    'Microsoft Public License': 'https://img.shields.io/badge/License-MS--PL_v3-blue.svg',
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Mozilla Public License 2.0': 'https://img.shields.io/badge/License-MPL_2.0-orange.svg',
    'Open Software License 3.0': 'https://img.shields.io/badge/License-OSL_3.0-lightblue.svg',
    'PostgreSQL License': 'https://img.shields.io/badge/License-PostgreSQL-blue.svg',
    'SIL Open Font License 1.1': 'https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg',
    'The Unlicense': 'https://img.shields.io/badge/license-Unlicense-yellow.svg',
    'Zlib': 'https://img.shields.io/badge/License-Zlib-lightgrey.svg'
  }[license]
}

// Function that returns the license link
function renderLicenseLink(license) {
  return {
    'Apache license 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'Artistic license 2.0': 'https://opensource.org/licenses/Artistic-2.0' ,
    'Boost Software License 1.0': 'https://www.boost.org/LICENSE_1_0.txt',
    'BSD 3 - clause Clear license': 'https://opensource.org/licenses/BSD-3-Clause',
    'Creative Commons Zero v1.0 Universal': 'http://creativecommons.org/publicdomain/zero/1.0/',
    'Creative Commons Attribution 4.0 International': 'https://creativecommons.org/licenses/by/4.0/',
    'Do What The F * ck You Want To Public License': 'http://www.wtfpl.net/about/',
    'Educational Community License v2.0': 'https://opensource.org/licenses/ECL-2.0',
    'Eclipse Public License 2.0': 'https://opensource.org/licenses/EPL-2.0',
    'European Union Public License 1.1': 'https://opensource.org/licenses/EUPL-1.1',
    'GNU Affero General Public License v3.0': 'https://www.gnu.org/licenses/gpl-3.0',
    'GNU General Public License v3.0': 'https://www.gnu.org/licenses/agpl-3.0',
    'GNU Lesser General Public License family': 'https://www.gnu.org/licenses/lgpl-3.0',
    'ISC': 'https://opensource.org/licenses/ISC',
    'LaTeX Project Public License v1.3c': 'https://www.latex-project.org/lppl/lppl-1-3c/',
    'Microsoft Public License': 'https://opensource.org/licenses/MS-PL',
    'MIT': 'https://opensource.org/licenses/MIT',
    'Mozilla Public License 2.0': 'https://opensource.org/licenses/MPL-2.0',
    'Open Software License 3.0': 'https://opensource.org/licenses/OSL-3.0',
    'PostgreSQL License': 'https://www.postgresql.org/about/licence/',
    'SIL Open Font License 1.1': 'https://opensource.org/licenses/OFL-1.1',
    'The Unlicense': 'http://unlicense.org/',
    'Zlib': 'https://opensource.org/licenses/Zlib'
  }[license]
}

// Function that returns the license section of README

function renderLicenseSection(license) {
  return {
    'Apache license 2.0': `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`,
    'Artistic license 2.0': `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`,
    'Boost Software License 1.0': `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`,
    'BSD 3 - clause Clear license': `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`,
    'Creative Commons Zero v1.0 Universal': `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`,
    'Creative Commons Attribution 4.0 International': `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`,
    'Do What The F * ck You Want To Public License': `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`,
    'Educational Community License v2.0': `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`,
    'Eclipse Public License 2.0': `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`,
    'European Union Public License 1.1': `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`,
    'GNU Affero General Public License v3.0': `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`,
    'GNU General Public License family': `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`,
    'GNU Lesser General Public License family': `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`,
    'ISC': `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`,
    'LaTeX Project Public License v1.3c': `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`,
    'Microsoft Public License': `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`,
    'MIT': `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`,
    'Mozilla Public License 2.0': `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`,
    'Open Software License 3.0': `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`,
    'PostgreSQL License': `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`,
    'SIL Open Font License 1.1': `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`,
    'The Unlicense': `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`,
    'Zlib':`[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
  }[license]
}

//Markdown function for README
function generateMarkdown(data) {
  let licensesChoice = '';
  data.gitList.forEach(license => {
    licensesChoice += renderLicenseSection(license);
  });


  return `# ${data.projectTitle}
### Table of Contents
**[Description](#description)**<br>
**[Installation](#installation)**<br>
**[Usage](#usage)**<br>
**[Project's Licenses](#projects-licenses)**<br>
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
  ${licensesChoice}

  ## Contribution
  ${data.contribute}

  ##Testing
  ${data.testing}
  
  ## Contact info
  - [${data.gitUser}](https://github.com/${data.gitUser})
  - [${data.mail}](mailto:${data.mail})

  ## Q&A
  ${data.qa}
`;
}

module.exports = generateMarkdown;
