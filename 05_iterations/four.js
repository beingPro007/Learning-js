const myObj = {
    js : "Javascript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by apple"
}
for (const key in myObj) {
    // console.log(`${key} is shortcut for ${myObj[key]}`);
}

const arr = ['js','cpp','rb','java'];
for (const key in arr) {
    // console.log(arr[key]);
}


// const map = new Map();
// map.set('IN',"India")
// map.set('USA',"United States Of America")
// map.set('Fr',"France")
// map.set('IN',"India")

// for (const key in map) {
//     console.log(key);
// } ....... no output as maps are not iterate this way .......