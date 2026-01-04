var User = /** @class */ (function () {
    function User(fullName, age) {
        var _this = this;
        this.fullName = fullName;
        this.age = age;
        this.formatUser = function () {
            return "".concat(_this.fullName, " ").concat(_this.age);
        };
    }
    return User;
}());
var user = new User('sujon', 22);
console.log(user.formatUser());
