"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(person) {
    return "Hello ".concat(person.firstName, " ").concat(person.lastName);
}
console.log(greet({ firstName: "Rakesh", lastName: "Sahoo" }));
var userOne = {
    dbId: 100,
    name: "rakesh",
    email: "r@rakesh.com",
    startTrial: function () {
        return "Free trial started";
    },
    getCopon: function (name) {
        return 10;
    }
};
