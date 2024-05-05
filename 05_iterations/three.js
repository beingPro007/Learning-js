//for of

// ["" , "" , ""]
const arr = [1,2,3,4,5];
for (const num of arr) {
    // console.log(`Value of num is ${num}`);
}
const greetings = "Hello World!";
for (const greets of greetings) {
    // console.log(`Chacter of the String is ${greet}`);
}
//+++++++++++++++++++++ Maps ++++++++++++++++++++++++ \\
const map = new Map();
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('Fr',"France")
map.set('IN',"India")

// console.log(map);

// for(const [key , value] of map){
//     console.log(key , ':-' , value);
// } Here we used destructuring the map by using [] --- > Square Brackets

// const myObj = {
//     'game' : 'NFS',
//     'game2' : 'Spiderman'
// }
// for (const [key , value] of myObj) {
//     console.log(key , ':-' , value);
// }
//we cant iterate object like this and there comes the typerror of
/*

TypeError: myObj is not iterable
    at Object.<anonymous> (D:\Learning-js\Learning-js\05_iterations\three.js:29:29)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49
*/