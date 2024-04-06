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
