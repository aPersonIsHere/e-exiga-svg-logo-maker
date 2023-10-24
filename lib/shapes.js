class Shape {
    constructor(color) {
      this.color = color;
    }

    setColor(color) {
        this.color = color;
    }
  
    render() {
        throw new Error('Children class must implement render() method');
    }
  }
  
  module.exports = { Shape };
  