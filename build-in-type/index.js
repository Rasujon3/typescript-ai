var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
// ckass object
// user1 - name: anisul islam, age: 25
// user1 - name: sujon, age: 31
var user1 = new User('sujon', 28);
user1.display();
var user2 = new User('liya', 22);
user2.display();
