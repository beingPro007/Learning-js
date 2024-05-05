//for
for (let idx = 0; idx <= 10; idx++) {
    const element = idx;
    if(element == 5){
        // console.log("5 is best");
    }
    // console.log(element);
}
for (let i = 0; i <= 10; i++) {
    // console.log(`Outer Loop : ${i}`);
    for(let j = 0;j <= 10; j++){
        // console.log(`Inner Loop : ${j}`);
        // console.log(i + ' * ' + j + "= " + i*j);
    } 
}
let myArray = ["Flash" , "Superman" ,"Batman", "Shaktiman"];

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

//++++++++++++++++++++++++ break and continue ++++++++++++++++++++++++\\
for (let index = 0; index < 6; index++) {
    if(index == 2) continue;
    console.log(`Value of index is : ${index}`);   
}