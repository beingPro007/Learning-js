// +++++++++++++++++++ Scopes +++++++++++++++++++ \\
// Never use var it always goes to global scope instead beaing inside a  block scope so we avoid it to use many time ......
{
  let a = 20;
  const b = 30;
  var c = 40;
//   console.log(a);
}
// console.log(c);
// console.log(a); -----> Gives Error
// function one(){
//     const username = "Gautam"
//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);
//     two()
// }
// one()
if(true){
    const username = "Gautam"
    if(username === "Gautam"){
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);
//+++++++++++++++++++++++++++ Interseting +++++++++++++++++++++++++++++++++\\


//function declaration
addone(5)
function addone(num){
    return num+1;
}

//function declaration + value hold so addTwo will give error if put before function addTwo
// addTwo(addTwo) ---> throws Error while the declaration one dont give any error if we took it anywhere
const addTwo = function(num){
    return num + 2;
}