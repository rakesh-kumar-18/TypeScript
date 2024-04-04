"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 18;
score = 15;
score = "12";
var me = { username: 'rakesh', dbAccess: true };
function getId(id) {
    // id.toUpperCase() // will give error (as 'id' can be 'number' or 'string'. In number type toUpperCase doesn't exits)
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// arrays
var data = [1, 2, 3, "rakesh"];
