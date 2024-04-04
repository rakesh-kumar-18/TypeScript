"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(person) {
    return "Hello ".concat(person.firstName, " ").concat(person.lastName);
}
console.log(greet({ firstName: "Rakesh", lastName: "Sahoo" }));
