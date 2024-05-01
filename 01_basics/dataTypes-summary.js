// # primitive  -- >call By Value

// 7 types : String,number,boolean,null,undefined,Symbols,BigInt

//--->Js is Dynamically typed

const score = 100;
const isLoggedIn = false;

let userEmail;

const bigNUmber = 3393919753428349489400n; //--> biigInt

// #non primitive --- > call by referencce

//Arrays,Objects,Functions
const heroes = ["Shaktiman", "naagraj", "doga"]; //-->arrays
let myObj = {
  name: "John",
  age: 33,
};
const myFunc = function () {
  console.log("Hello World!");
};
//+++++++++++++++++++++++++++++++++++++++++++++++++++=
//memory type --> Stack(Primitive),Heap(Non-Primitive )
let oldName = "Deepak";
let newName = oldName;
newName = "Gautam";
console.log(oldName);
console.log(newName); //----> Got a Copy in stack

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};
let userTwo = userOne;
userTwo.email = "gautam@google.com";
console.log(userOne.email);
cconsole.log(userTwo.email); //--> answer both log statements come same as call by reference is happening whcih leads to change of the referened value at the end
