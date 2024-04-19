const fs = require('fs');
const path = require('path');
const { Circle, Triangle, Square } = require('./lib/shapes');

// Function to generate an SVG logo
function generateLogo(text, textColor, shapeType, shapeColor) {
  // Create the appropriate shape based on user input
  let shape;
  switch (shapeType) {
    case 'circle':
      shape = new Circle(50); // Example radius, adjust as needed
      break;
    case 'triangle':
      shape = new Triangle(100, 100); // Example base and height, adjust as needed
      break;
    case 'square':
      shape = new Square(100); // Example side length, adjust as needed
      break;
    default:
      throw new Error('Invalid shape type');
  }

  // Generate the SVG markup for the logo
  const svgMarkup = `
    <svg width="300" height="200">
      <rect width="100%" height="100%" fill="white"/>
      <!-- Add more SVG elements for your logo, using the shape properties -->
    </svg>
  `;

  // Save the SVG markup to a file named "logo.svg"
  const outputDir = path.join(__dirname, 'output');
  const outputFile = path.join(outputDir, 'logo.svg');
  fs.writeFileSync(outputFile, svgMarkup);

  // Print a message indicating that the logo was generated
  console.log('Generated logo.svg');
}

// Export the generateLogo function
module.exports = generateLogo;
