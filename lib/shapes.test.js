const { Square, Triangle, Circle } = require("./shapes");
const {render} = require("./shapes.js");

describe("Circle", () => {
    test("test blue background circle", () => {
        const shape = new Circle("blue");
        expect(shape.render()).toEqual(
            '<circle cx="50%" cy="50%" r="48%" fill="blue" />'
        );
    });
});

describe("Triangle", () => {
    test("test red background triangle", () => {
        const shape = new Triangle("red");
        expect(shape.render()).toEqual(
            `<polygon points="250,0 500,500 0,500" style="fill:red;" />`
        );
    });
});

describe("Square", () => {
    test("test green background square", () => {
        const shape = new Square("green");
        expect(shape.render()).toEqual(
            `<rect fill="green" width="500" height="500"/>`
        );
    });
});