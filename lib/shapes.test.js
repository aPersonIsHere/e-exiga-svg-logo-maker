const { Shape } = require('./shapes.js');
const { Circle } = require('./Circle');
const { Triangle } = require('./Triangle');
const { Square } = require('./Square');

describe('Shape', () => {
    describe('Circle Render Pass', () => {
        it('should return true for render text WITH a setColor to blue', () => {
            const circle = new Circle();
            circle.setColor('blue');
            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="100" fill="blue" />');
        });
    });

    describe('Triangle Render Pass', () => {
        it('should return true for render text WITH a setColor to blue', () => {
            const triangle = new Triangle();
            triangle.setColor('blue');
            expect(triangle.render()).toEqual('<polygon points="0 175, 300 175, 150 0" fill="blue" />');
        });
    });

    describe('Square Render Pass', () => {
        it('should return true for render text WITH a setColor to blue', () => {
            const square = new Square();
            square.setColor('blue');
            expect(square.render()).toEqual('<rect x="75" y="25" width="150" height="150" fill="blue" />');
        });
    });
})