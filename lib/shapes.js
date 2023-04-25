// parent shape class
class Shape {
    constructor(text, textColor, color) {
        this.text = text;
        this.textColor = textColor;
        this.color = color;
    }

    // will return svg code needed to render each child class shape
    render() {
        return new Error("render() method is implemented in child classes");
    }
}

// class for circle shape
class Circle extends Shape {
    render() {
        const svgText = `
        <circle cx="150" cy="100" r="82" fill="${this.color}" />

        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        `;
        return svgText;
    }
}

// class for square shape
class Square extends Shape {
    render() {
        const svgText = `
        <rect x="68" y="18" width="164" height="164" fill="${this.color}" />

        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        `;
        return svgText;
    }
}

// class for triangle shape
class Triangle extends Shape {
    render() {
        const svgText = `
        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />

        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        `;
        return svgText;
    }
}

module.exports = { Shape, Circle, Square, Triangle };