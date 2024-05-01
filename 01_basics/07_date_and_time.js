//Dates

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString('en-US'))
// console.log(typeof myDate)
// let myCreatedDate = new Date(2002 , 9 ,13)
// let myCreatedDate = new Date("05-01-2024")
// console.log(myCreatedDate.toLocaleString())
// let myTimeStamp = Date.now();
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(myTimeStamp / 1000)) // -----> Convert to Seconds from ms......
let newDate = new Date()
console.log(newDate.getMonth() + 1) // ----> +1 as we get the exact month not the month before the current month as months are declared from following 0-based indexing
console.log(newDate.getDate());
newDate.toLocaleString('default',{
    weekday : "long"
})