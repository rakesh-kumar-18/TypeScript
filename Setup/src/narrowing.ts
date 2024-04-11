function narrowing(val: number | string) {
    // Here we narrow the type of val to string
    if (typeof val === "string") return val.toUpperCase();
}

function provideId(id: string | null) {
    if (!id) {
        return "Please provide a ID";
    }
    return id.toUpperCase();
}

interface User {
    name: string;
    email: string;
}

interface Admin {
    name: string;
    email: string;
    isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return account.name;
}

function logValue(x: Date | string) {
    if (x instanceof Date) {
        return x.toDateString();
    }
    return x.toUpperCase();
}

interface Fish {
    swim: () => void;
}

interface Bird {
    fly: () => void;
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet;
        return "Fish Food";
    }
    pet;
    return "Bird Food";
}

// Discriminated unions
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    side: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    return shape.side ** 2;
}

// Exhaustiveness checking
function getShape(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return shape.kind;

        case "square":
            return shape.kind;

        default:
            const _defaultShape: never = shape;
            return _defaultShape;
    }
}