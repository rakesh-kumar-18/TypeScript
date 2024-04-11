"use strict";
function narrowing(val) {
    // Here we narrow the type of val to string
    if (typeof val === "string")
        return val.toUpperCase();
}
function provideId(id) {
    if (!id) {
        return "Please provide a ID";
    }
    return id.toUpperCase();
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return account.name;
}
function logValue(x) {
    if (x instanceof Date) {
        return x.toDateString();
    }
    return x.toUpperCase();
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish Food";
    }
    pet;
    return "Bird Food";
}
function getArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    return Math.pow(shape.side, 2);
}
// Exhaustiveness checking
function getShape(shape) {
    switch (shape.kind) {
        case "circle":
            return shape.kind;
        case "square":
            return shape.kind;
        default:
            const _defaultShape = shape;
            return _defaultShape;
    }
}
