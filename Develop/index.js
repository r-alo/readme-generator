// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./utils/generateMarkdown')
// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle', 
        message: '1. Input project title (required):'
    },
    {
        type: 'input', 
        name: 'description', 
        message: "2. Input your project's description (required):"
    },
    {
        type: 'input', 
        name: 'installation', 
        message: '3. Describe the necessary installation to run the project (required): '
    },
    {
        type: 'input', 
        name: 'usage', 
        message: "4. Describe the project's usage (required): "
    },
    {
        type: 'checkbox', 
        name: 'gitList', 
        message: "5. Choose the License(s) for the project (required):", 
        choices: [
            'Apache license 2.0',
            'Artistic license 2.0',
            'Boost Software License 1.0',
            'BSD 3 - clause Clear license',
            'Creative Commons license family',
            'Creative Commons Zero v1.0 Universal',
            'Creative Commons gitList 4.0',
            'Creative Commons Attribution Share Alike 4.0',
            'Do What The F * ck You Want To Public License',
            'Educational Community License v2.0',
            'Eclipse Public License 2.0',
            'European Union Public License 1.1',
            'GNU Affero General Public License v3.0	',
            'GNU General Public License family',
            'GNU Lesser General Public License family',
            'ISC',
            'LaTeX Project Public License v1.3c',
            'Microsoft Public License',
            'MIT',
            'Mozilla Public License 2.0',
            'Open Software License 3.0',
            'PostgreSQL License',
            'SIL Open Font License 1.1',
            'University of Illinois / NCSA Open Source License',
            'The Unlicense'
        ]
},
    {
        type: 'input', 
        name: 'contribute', 
        message: '6. How does contributing work for this project (required): '
    },
    {
        type: 'input', 
        name: 'testing', 
        message: "7. Input tests for code simulation (required): "
    },
    {
        type: 'input', 
        name: 'gitUser', 
        message: "8. Enter your GitHub user (required):"
    },
    {
        type: 'input', 
        name: 'mail', 
        message: '9. Enter your contact mail (required): '
    },
    {
        type: 'input', 
        name: 'qa', 
        message: "10. Write your Q&A for the project (required): "
    }
];

// function to start inquirer and create README
function init() {
    inquirer
        .prompt(
            questions
        )
        .then((answers) => {
            
            const content = markDown(answers);
            fs.writeFile('./PROJECT.md', content, err => {
                if (err) {
                    console.error(err);
                }
                // file written successfully
            });
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// Function call to initialize app
init();
