class Person {
    constructor(name, colour) {
        this.name = name;
        this.colour = colour;
    }

    greet() {
        console.log("Hello, my name is " + this.name + " and my favourite colour is " + this.colour + ".");
    }
}

export default Person;
