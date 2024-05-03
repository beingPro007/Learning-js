// function sayMyName(){
//     console.log("G");
//     console.log("A");
//     console.log("U");
//     console.log("T");
//     console.log("A");
//     console.log("M");
// }
// sayMyName()
function add(a , b) {
    return a+b
}
const result = add(2,3)
// console.log("Result : " , result);
function loginUserMessage(username) {
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username}, just logged in`
}
console.log(loginUserMessage("Gautam"))