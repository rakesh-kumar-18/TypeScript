class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = `${firstName} ${middleInitial} ${lastName}`;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greet(person: Person) {
    return `Hello ${person.firstName} ${person.lastName}`;
}

const me = new Student("Rakesh", "Kumar", "Sahoo");

console.log(greet(me));

export { };