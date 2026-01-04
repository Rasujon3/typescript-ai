class User {
    // properties, methods, constructor
     userName: string;
     age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    display(): void {
        console.log(`username: ${this.userName}, age: ${this.age}`);
    }
}

// ckass object
// user1 - name: anisul islam, age: 25
// user1 - name: sujon, age: 31

let user1 = new User('sujon', 28)
user1.display();

let user2 = new User('liya', 22)
user2.display();