const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const SVG = require("./svg");
const {Circle, Triangle, Square } = require("./shapes");

class CLI {
    run() {
        return inquirer
        .prompt()
        .then(({ text, textColour, shapeType, shapeColour }) => {})
        .then(() => {})
        .catch(() => {});
    }
}

module.exports = CLI;