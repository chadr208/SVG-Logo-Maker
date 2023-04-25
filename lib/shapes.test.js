const { Shape, Circle, Square, Triangle } = require("./shapes.js");

describe("Shape", () => {
    describe("Constructor", () => {
        it("should make a Shape object", () => {
            const testShape = new Shape("X", "Y", "Z");
            expect(testShape).toBeInstanceOf(Shape);
        });
    });
    describe("Render", () => {
        it("should throw an Error", () => {
            const testShape = new Shape("X", "Y", "Z");
            const test = testShape.render();
            expect(test).toEqual(new Error("render() method is implemented in child classes"));
        });
    });
});

describe("Circle", () => {
    describe("Constructor", () => {
        it("should make a Circle object", () => {
            const testCircle = new Circle("X", "Y", "Z");
            expect(testCircle).toBeInstanceOf(Circle);
        });
    });
    describe("Render", () => {
        it("should return the correct svg text", () => {
            const testCircle = new Circle("X", "Y", "Z");
            const test = testCircle.render();
            const svgTest = `
        <circle cx="150" cy="100" r="82" fill="Z" />

        <text x="150" y="120" font-size="60" text-anchor="middle" fill="Y">X</text>
        `;
            expect(test).toEqual(svgTest);
        });
    });
});

describe("Square", () => {
    describe("Constructor", () => {
        it("should make a Square object", () => {
            const testSquare = new Square("X", "Y", "Z");
            expect(testSquare).toBeInstanceOf(Square);
        });
    });
    describe("Render", () => {
        it("should return the correct svg text", () => {
            const testSquare = new Square("X", "Y", "Z");
            const test = testSquare.render();
            const svgTest = `
        <rect x="68" y="18" width="164" height="164" fill="Z" />

        <text x="150" y="120" font-size="60" text-anchor="middle" fill="Y">X</text>
        `;
            expect(test).toEqual(svgTest);
        });
    });
});

describe("Triangle", () => {
    describe("Constructor", () => {
        it("should make a Triangle object", () => {
            const testTriangle = new Triangle("X", "Y", "Z");
            expect(testTriangle).toBeInstanceOf(Triangle);
        });
    });
    describe("Render", () => {
        it("should return the correct svg text", () => {
            const testTriangle = new Triangle("X", "Y", "Z");
            const test = testTriangle.render();
            const svgTest = `
        <polygon points="150, 18 244, 182 56, 182" fill="Z" />

        <text x="150" y="120" font-size="60" text-anchor="middle" fill="Y">X</text>
        `;
            expect(test).toEqual(svgTest);
        });
    });
});