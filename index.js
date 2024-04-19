// Require necessary modules
const fs = require('fs');
const inquirer = require('inquirer');
const generator = require('./src/generator');

// Define the main function
async function main() {
    try {
        // Prompt user for input
        const userInput = await inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to three characters:',
                validate: (input) => {
                    if (input.length <= 3) {
                        return true;
                    } else {
                        return 'Please enter up to three characters.';
                    }
                },
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter the text color (keyword or hexadecimal number):',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape:',
                choices: ['circle', 'triangle', 'square'],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter the shape color (keyword or hexadecimal number):',
            },
        ]);

        // Generate SVG content based on user input
        const svgContent = generator.generateSVG(userInput);

        // Write SVG content to file
        fs.writeFileSync('output/logo.svg', svgContent);

        // Log success message
        console.log('Generated logo.svg');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Call the main function
main();
