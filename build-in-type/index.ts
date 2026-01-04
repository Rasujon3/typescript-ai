interface IUserFormatter {
    formatUser : () => string;
}
class User implements IUserFormatter{

  constructor(private fullName: string, private  age: number) {
  }
  formatUser = () => {
    return `${this.fullName} ${this.age}`
  }

}

let user = new User('sujon', 22)
console.log(user.formatUser());
