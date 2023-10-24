const { Shape } = require('./shapes.js');

class Square extends Shape {
    constructor(color) {
        super(color);
  }

  render() {
    return `<rect x="75" y="25" width="150" height="150" fill="${this.color}" />`;
  }
}

module.exports = { Square };