const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(Math.PI);
// Math.PI = 5;//Not possible the out of this log is always 3.1415...
// console.log(descriptor);
const chai = {
    name : 'Ginger Chai',
    price : 250,
    isAvailable : true,
    orderChai : function(){
        console.log("chai nhi bani");
    }
}

/* 

Output
{
  value: 'Ginger Chai',
  writable: true,
  enumerable: true,
  configurable: true
}

*/
Object.defineProperty(chai,'name',{
    // writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai,'name'));

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
    
}