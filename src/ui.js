const inquirer = require('inquirer');
const generateLogo = require('./generator');

// Function to prompt the user for input and generate the logo
function promptUser() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:',
        validate: (input) => {
          return input.length <= 3 ? true : 'Please enter up to three characters.';
        },
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (color keyword or hexadecimal number):',
      },
      {
        type: 'list',
        name: 'shapeType',
        message: 'Choose a shape for the logo:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (color keyword or hexadecimal number):',
      },
    ])
    .then((answers) => {
      // Call the generateLogo function with user input
      generateLogo(answers.text, answers.textColor, answers.shapeType, answers.shapeColor);
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}

// Export the promptUser function
module.exports = promptUser;
