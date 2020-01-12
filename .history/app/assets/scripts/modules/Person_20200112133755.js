class Person {
    constructor(name, colour) {
        this.name = name;
        this.colour = colour;
    }

    this.greet = function () {
    console.log("Hello, my name is " + this.name + " and my favourite colour is " + this.colour + ".");
}
}

module.exports = Person;
