// class User {
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword(){
//         return `${this.password}abc`;
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new User("chai","chai@google.com","123");
// // console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//behind the scene

function Users(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}
Users.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
Users.prototype.changeUsername= function(){
    return `${this.username.toUpperCase()}`;
}
const tea = new Users("tea","tea@gmail.com",123);
console.log(tea.encryptPassword());;

console.log('tea.changeUsername() :', tea.changeUsername());