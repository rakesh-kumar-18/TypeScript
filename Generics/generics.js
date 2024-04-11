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
// Take input as an array
function getSearchProduct(products) {
    return products[0];
}
var getProductId = function (products) {
    return products[0];
};
function identityThree(val1, val2) {
    return {
        val1: val1,
        val2: val2
    };
}
identityThree(0, "Rakesh");
var sellable = /** @class */ (function () {
    function sellable() {
    }
    sellable.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    return sellable;
}());
var sell = new sellable();
var course = {
    name: "MERN",
    author: "Hitesh",
    subject: "TypeScript"
};
sell.addToCart(course);
