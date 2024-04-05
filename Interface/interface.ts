interface Person {
    firstName: string;
    lastName: string;
}

function greet(person: Person) {
    return `Hello ${person.firstName} ${person.lastName}`;
}

console.log(greet({ firstName: "Rakesh", lastName: "Sahoo" }));

interface User {
    readonly dbId: number;
    name: string;
    email: string;
    startTrial: () => string;
    getCopon(couponName: string): number;
}

const userOne: User = {
    dbId: 100,
    name: "rakesh",
    email: "r@rakesh.com",
    startTrial: () => {
        return "Free trial started";
    },
    getCopon: (name: "rakesh50") => {
        return 10;
    }
};

export { };