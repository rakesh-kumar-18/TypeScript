let score: number | string = 18;

score = 15;
score = "12";

interface User {
    name: string;
    dbAccess: boolean;
}

interface Admin {
    username: string;
    dbAccess: boolean;
}

const me: User | Admin = { username: 'rakesh', dbAccess: true };

function getId(id: number | string): void {
    // id.toUpperCase() // will give error (as 'id' can be 'number' or 'string'. In number type toUpperCase doesn't exits)
    if (typeof id === "string") {
        id.toLowerCase();
    }
}

// arrays
const data: (number | string)[] = [1, 2, 3, "rakesh"];

export { };