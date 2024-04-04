"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addOne(num) {
    return num + 1;
}
function getUpper(val) {
    val.toUpperCase();
}
function logInUser(email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
} // add default value to a parameter
var getUser = function (user) {
    return user;
};
addOne(17);
getUpper("rakesh");
logInUser("rakesh", false);
getUser("rakesh");
var heros = ['thor', 'spiderman', 'ironman'];
heros.map(function (hero) {
    return "Hero is ".concat(hero);
});
function consoleError(errorMsg) {
    console.log(errorMsg);
}
function handleError(errorMsg) {
    throw new Error(errorMsg);
}
