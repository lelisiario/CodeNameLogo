const { generateLogo, generateSVG } = require('../src/generator');

test('generateSVG function generates correct SVG markup', () => {
  const text = 'Test Text';
  const textColor = 'red';
  const shapeType = 'circle';
  const shapeColor = 'blue';

  // Generate shapeMarkup based on the shapeType
  let shapeMarkup = '';
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

  // Define the expected SVG markup
  const expectedSVGMarkup = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="white"/>
      ${shapeMarkup} <!-- Include shapeMarkup here -->
      <text x="50%" y="50%" fill="${textColor}" text-anchor="middle">${text}</text>
    </svg>
  `.trim(); // Trim leading and trailing whitespace

  // Generate SVG markup using generateSVG function
  const generatedSVGMarkup = generateSVG(text, textColor, shapeType, shapeColor).trim(); // Trim leading and trailing whitespace

  // Assert that the generated SVG markup matches the expected SVG markup
  expect(generatedSVGMarkup).toBe(expectedSVGMarkup);
});
