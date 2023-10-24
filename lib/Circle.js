const { Shape } = require('./shapes.js');

class Circle extends Shape {
    constructor(color) {
        super(color);
  }

  render() {
    return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
  }
}

module.exports = { Circle };