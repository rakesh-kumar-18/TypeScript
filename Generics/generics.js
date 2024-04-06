function identity(arg) {
    return arg;
}
var res = identity("rakesh");
var res2 = identity(18);
// Mostly used like this(shortcut for Type: T)
// It doesn't need to be 'Type' or 'T'. It can be anything
function identityTwo(val) {
    return val;
}
function product(obj) {
    return obj;
}
product({
    brand: "Asus",
    model: "Vivobook",
    warranty: 1
});
