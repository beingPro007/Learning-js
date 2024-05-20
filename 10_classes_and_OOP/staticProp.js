class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return 123;
    }
}
const hitesh = new User("Hitesh");
// console.log(hitesh.createId());
class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email;
    }
}

const gautam = new Teacher("Gautam","gautam@gmail.com");
// console.log(gautam.createId()); --> throw error as it dont have acess to createId due to static we used in front of createId....