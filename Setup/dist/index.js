"use strict";
// class User {
//     name: string;
//     email: string;
//     readonly city: string = "Bengaluru";
//     private salary: string = "10LPA";
var _User_company;
//     constructor(name: string, email: string) {
//         this.name = name;
//         this.email = email;
//     }
// }
// short-cut way(Mostly used in proffesional code)
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.city = "Bengaluru";
        this.salary = "10LPA";
        _User_company.set(this, "Google");
        this._courseCount = 1;
    }
    get getAppleEmail() {
        return `${this.email.split('@')[0]}@apple.com`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(value) {
        this._courseCount = value;
    }
}
_User_company = new WeakMap();
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this.courseCount = 4;
    }
}
const me = new User("Rakesh", "r@rakesh.com");
console.log(me.city);
// console.log(me.salary); // Not allowed
console.log(me["salary"]); // In this way we can access private fields
console.log(me.getAppleEmail);
console.log(me.courseCount);
me.courseCount = 3;
console.log(me.courseCount);
const sub = new SubUser("Rajesh", "r@vscode.com");
sub.changeCourseCount();
console.log(sub.courseCount);
