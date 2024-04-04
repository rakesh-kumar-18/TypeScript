interface User {
    readonly _id: Array<string>;
    name: string;
    email: string;
    isLoggedIn: boolean;
}

function getUser(user: User): User {
    return user;
}

const user: User = {
    _id: ["123"],
    name: "rakesh",
    email: "rakesh@dr.com",
    isLoggedIn: false
};

user.isLoggedIn = true;
user._id.push("456");
console.log(user._id);

export { };