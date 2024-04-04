function addOne(num: number): number {
    return num + 1;
}

function getUpper(val: string) {
    val.toUpperCase();
}

function logInUser(email: string, isPaid: boolean = true) { } // add default value to a parameter

const getUser = (user: string): string => {
    return user;
};

addOne(17);
getUpper("rakesh");
logInUser("rakesh", false);
getUser("rakesh");

const heros = ['thor', 'spiderman', 'ironman'];
heros.map((hero): string => {
    return `Hero is ${hero}`;
});

function consoleError(errorMsg: string): void {
    console.log(errorMsg);
}

function handleError(errorMsg: string): never {
    throw new Error(errorMsg);
}

export { };