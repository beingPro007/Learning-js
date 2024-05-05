const coding = ['js','cpp','rb','java',"py"];

// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item , index , arr) => {
//     console.log(item ,index , arr);
// })

const myCoding = [
    {
        language : "JavaScript",
        filName : "js"
    },
    {
        language : "Java",
        filName : "java"
    },
    {
        language : "c++",
        filName : "cpp"
    }
]
myCoding.forEach((val) => {
    console.log(val.language);
})