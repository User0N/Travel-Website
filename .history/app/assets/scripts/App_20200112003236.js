function Person(name, colour) {
    this.name = name;
    this.colour = colour;
    this.greet = function () {
        console.log("Hello, my name is " + this.name + " and my favourite colour is " + this.colour + ".");
    }
}

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();
