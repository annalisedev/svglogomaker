const fs = require('fs');

class Shape {
    constructor(svgData, textColour, text) {
        this.svgData = svgData;
        this.textColour = textColour;
        this.text = text;
    }

    render() {
        return this.svgData;
    }

    createSvgFile() {
        const finalLogo = `
        <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">
          ${this.svgData}
          <text text-anchor="middle" alignment-baseline="central" x="50%" y="50%" font-size="250px" fill="${this.textColour}">${this.text}</text>
        </svg>
      `;
        fs.writeFileSync("logo.svg", finalLogo);
    }
}

class Circle extends Shape {
    constructor(shapecolour, text, textColour) {
        const svgData = `<circle cx="50%" cy="50%" r="48%" fill="${shapecolour}" />`;
    
        super(svgData, textColour, text);
      }
}

class Triangle extends Shape {
    constructor(shapecolour, text, textColour) {
        const svgData = `<polygon points="250,0 500,500 0,500" style="fill:${shapecolour};" />`;

        super(svgData, textColour, text);
      }
}

class Square extends Shape {
    constructor(shapecolour, text, textColour) {
        const svgData = `<rect fill="${shapecolour}" width="500" height="500"/>`;
    
        super(svgData, textColour, text);
      }
}

module.exports = { Circle, Triangle, Square };