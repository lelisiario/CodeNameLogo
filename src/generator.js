// Required packages
const fs = require("fs");
const path = require("path");
const { Circle, Triangle, Square } = require("../lib/shapes");

function generateSVG(text, textColor, shapeType, shapeColor) {
  // Initialize shapeMarkup with an empty string
  let shapeMarkup = '';

  // Determine the shape markup based on the shapeType
  switch (shapeType) {
    case 'circle':
      shapeMarkup = `<circle cx="50%" cy="50%" r="50%" fill="${shapeColor}"/>`;
      break;
    case 'triangle':
      shapeMarkup = `<polygon points="150,50 250,150 50,150" fill="${shapeColor}"/>`;
      break;
    case 'square':
      shapeMarkup = `<rect x="25%" y="25%" width="50%" height="50%" fill="${shapeColor}"/>`;
      break;
    default:
      throw new Error('Invalid shape type');
  }

  // Generate the SVG markup based on the provided parameters
  const svgMarkup = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="white"/>
      ${shapeMarkup} <!-- Include shapeMarkup here -->
      <text x="50%" y="50%" fill="${textColor}" text-anchor="middle">${text}</text>
    </svg>
  `;

  // Return the generated SVG markup
  return svgMarkup.trim();
}
// Export the generateSVG functions
module.exports = { generateSVG };