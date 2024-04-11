function identity<Type>(arg: Type): Type {
    return arg;
}

const res = identity<string>("rakesh");
const res2 = identity(18);

// Mostly used like this(shortcut for Type: T)
// It doesn't need to be 'Type' or 'T'. It can be anything
function identityTwo<T>(val: T): T {
    return val;
}

interface Laptop {
    brand: string;
    model: string;
    warranty: number;
}

function product<Laptop>(obj: Laptop): Laptop {
    return obj;
}

product<Laptop>({
    brand: "Asus",
    model: "Vivobook",
    warranty: 1
});

// Take input as an array
function getSearchProduct<T>(products: Array<T>): T {
    return products[0];
}

const getProductId = <T>(products: Array<T>): T => {
    return products[0];
};

function identityThree<T, U>(val1: T, val2: U): object {
    return {
        val1,
        val2
    };
}

identityThree(0, "Rakesh");


interface Quiz {
    name: string,
    type: string;
}

interface Course {
    name: string,
    author: string,
    subject: string;
}

class sellable<T> {
    public cart: Array<T>;

    addToCart(product: T) {
        this.cart.push(product);
    }
}

const sell = new sellable();
const course: Course = {
    name: "MERN",
    author: "Hitesh",
    subject: "TypeScript"
};

sell.addToCart(course);