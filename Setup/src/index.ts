// class User {
//     name: string;
//     email: string;
//     readonly city: string = "Bengaluru";
//     private salary: string = "10LPA";

//     constructor(name: string, email: string) {
//         this.name = name;
//         this.email = email;
//     }
// }

// short-cut way(Mostly used in proffesional code)
class User {
    readonly city: string = "Bengaluru";
    private salary: string = "10LPA";
    #company: string = "Google";
    private _courseCount: number = 1;

    constructor(
        public name: string,
        public email: string
    ) { }

    get getAppleEmail(): string {
        return `${this.email.split('@')[0]}@apple.com`;
    }

    get courseCount(): number {
        return this._courseCount;
    }

    set courseCount(value) {
        this._courseCount = value;
    }
}

class SubUser extends User {
    isFamily: boolean = true;
    changeCourseCount() {
        this.courseCount = 4;
    }
}

const me = new User("Rakesh", "r@rakesh.com");
console.log(me.city);
// console.log(me.salary); // Not allowed
console.log(me["salary"]); // In this way we can access private fields
console.log(me.getAppleEmail);
console.log(me.courseCount);
me.courseCount = 3;
console.log(me.courseCount);

const sub = new SubUser("Rajesh", "r@vscode.com");
sub.changeCourseCount();
console.log(sub.courseCount);
