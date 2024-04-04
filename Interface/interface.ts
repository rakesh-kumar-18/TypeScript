interface Person {
    firstName: string;
    lastName: string;
}

function greet(person: Person) {
    return `Hello ${person.firstName} ${person.lastName}`;
}

console.log(greet({ firstName: "Rakesh", lastName: "Sahoo" }));

export { };