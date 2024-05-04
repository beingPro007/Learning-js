const user = {
    username : "Hitesh",
    price : 999,

    welcome : function(){
        console.log(`${this.username} , welcome to my website`);
        console.log(this)
    }
}
// user.welcome()
// user.username = "Gautam"
// user.welcome()

// console.log(this); -->this give {}an empty object in terminal here but if we inspect and go to console of a website it show different dom and bom object by default try once 
// function chai(){
//     let username = "Hitesh"
//     console.log(this.username); // returns undefined as this used only for objects
// }
// chai()

// const addtwo = (a,b) => {
//     return a+b;
// }
//const addtwo = (a,b) => (a+b) ====> Can be written as this in short if we have only one statement ... dont use curly braces in this it will throw for sure...
// console.log(addtwo(3,4));
//To return objects as object have curly braces we use normal braces
const returnObject = (num) => ({username : "Gautam"}) 
console.log(returnObject(3));

