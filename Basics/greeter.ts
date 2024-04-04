function greet(person: string): string {
    return `Hello ${person}`;
}

console.log(greet("TypeScript"));
// console.log(greet(13)); // Argument of type 'number' is not assignable to parameter of type 'string'.

export { }; // Just to avoid those red squiggly line