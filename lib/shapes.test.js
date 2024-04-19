const { Circle, Triangle, Square } = require('./shapes');

// Test cases for the Circle class
describe('Circle', () => {
  test('should create a circle with the given radius', () => {
    const circle = new Circle(5);
    expect(circle.radius).toBe(5);
  });

  // Add more test cases for other methods or properties of the Circle class
});

// Test cases for the Triangle class
describe('Triangle', () => {
  test('should create a triangle with the given base and height', () => {
    const triangle = new Triangle(3, 4);
    expect(triangle.base).toBe(3);
    expect(triangle.height).toBe(4);
  });

  // Add more test cases for other methods or properties of the Triangle class
});

// Test cases for the Square class
describe('Square', () => {
  test('should create a square with the given side length', () => {
    const square = new Square(6);
    expect(square.sideLength).toBe(6);
  });
});
