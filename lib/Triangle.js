const { Shape } = require('./shapes.js');

class Triangle extends Shape {
    constructor(color) {
        super(color);
  }

  render() {
    return `<polygon points="0 175, 300 175, 150 0" fill="${this.color}" />`;
  }
}

module.exports = { Triangle };
