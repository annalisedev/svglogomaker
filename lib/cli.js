const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const {Circle, Triangle, Square} = require("./shapes");
const {createSvgFile} = require("./shapes.js");

class CLI {
    run() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'What text would you like your logo to display (max 3 chars)?', 
            },
            {
                type: 'input',
                name: 'textColour',
                message: 'What colour would you like the text to be?', 
            },
            {
                type: 'list',
                name: 'shape',
                message: 'What shape would you like your logo to be?',
                choices: ["Circle", "Square", "Triangle"] 
            },
            {
                type: 'input',
                name: 'shapecolour',
                message: 'What colour would you like the shape to be?', 
            },
        ])
        .then(({ text, textColour, shape, shapecolour }) => {
            if (text.length > 3) {
                console.log("Logo text must be 3 characters or less, please try again.");
            } else {
                if (shape === 'Circle') {
                    const circle = new Circle(shapecolour, text, textColour);
                    circle.createSvgFile();
                } else if (shape === 'Triangle') {
                    const triangle = new Triangle(shapecolour, text, textColour);
                    triangle.createSvgFile();
                } else if (shape === 'Square') {
                    const square = new Square(shapecolour, text, textColour);
                    square.createSvgFile();
                }
            }
        })
        .catch((err) => {
            console.log(err) ; console.log("Generated logo.svg");
        });
    }
}

module.exports = CLI;