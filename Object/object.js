"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getUser(user) {
    return user;
}
var user = {
    _id: ["123"],
    name: "rakesh",
    email: "rakesh@dr.com",
    isLoggedIn: false
};
user.isLoggedIn = true;
user._id.push("456");
console.log(user._id);
