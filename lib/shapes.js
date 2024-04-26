// Define the Circle class
class Circle {
    constructor(radius, color = 'red') {
        this.radius = radius;
        this.color = color;
    }

    // Method to generate SVG code for a circle
    generateSVG() {
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
}

// Define the Triangle class
class Triangle {
    constructor(base, height, color) {
        this.base = base;
        this.height = height;
        this.color = color;
    }

    // Method to generate SVG code for an equilateral triangle
    generateSVG() {
        const height = (Math.sqrt(3) / 2) * this.sideLength;
        const halfSide = this.sideLength / 2;
        const points = `150,${100 + height / 3} ${150 - halfSide},${100 + (2 * height) / 3} ${150 + halfSide},${100 + (2 * height) / 3}`;

        return `<polygon points="${points}" fill="${this.color}" />`;
    }
}
// Define the Square class
class Square {
    constructor(sideLength, color) {
        this.sideLength = sideLength;
        this.color = color;
    }

    // Method to generate SVG code for a square
    generateSVG() {
        return `<rect x="${150 - this.sideLength / 2}" y="${100 - this.sideLength / 2}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
}

// Export the classes
module.exports = { Circle, Triangle, Square };
