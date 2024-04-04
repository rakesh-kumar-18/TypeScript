"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = "".concat(firstName, " ").concat(middleInitial, " ").concat(lastName);
    }
    return Student;
}());
function greet(person) {
    return "Hello ".concat(person.firstName, " ").concat(person.lastName);
}
var me = new Student("Rakesh", "Kumar", "Sahoo");
console.log(greet(me));
