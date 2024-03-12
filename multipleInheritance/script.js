//class Person  (Admin grand Parent)
class Person {
    firstName;
    constructor(fname) {
        this.fname = fname;
    }

    greetPerson() {return `Welcome Dear ${this.fname} >> class Person`}
}
//class User (Admin Parent)
class User extends Person {

    constructor(fname, lname) {
        super(fname);
        this.lname = lname;
    }

    greetUser() {return `Welcome Dear ${this.fname} ${this.lname} >> class User `}
}
//class Admin
class Admin extends User {
    constructor(fname, lname, age) {
        super(fname, lname);             // call fields form Class Person and User
        this.age = age;
    }
    greetAdmin() {
        let greetPerson = super.greetPerson();  //call  method from Class Person
        let greetUser = super.greetUser();   //call  method form Class User
        return ` ${greetPerson} ,  ${greetUser}
        Welcome Dear ${this.fname} ${this.lname} age ${this.age} >> class Admin`
    }
}
let user01 = new Admin("ali", "rezaei", 26);
console.log(user01.greetAdmin());
