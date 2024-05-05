const userEmail = "h@hitesh.ai"

if(userEmail){
    console.log("Got user Email");
}else{
    console.log("Don't have user Email");
}

//falsy values

// false , 0 , -0 ,BigInt 0n, "" ,null ,undefined,NaN

//Truthy Values

// "0" , 'false'," ",[],{},function(){}

// const arr = []
// if(arr.length === 0){
//     console.log("Array is Empty");
// }

// const myobj = {}
// if(Object.keys(myobj)){
//     console.log("Object is Empty!");
// }

//Nullish Coalescing Operator (??) : null,undefinded killer

// let val1;
// val1 = null ?? 10; #output --> 10
// val1 = undefined ?? 14; #output --> 15
// console.log(val1);

//Terniary Operator

//condition ? true : false
// const iceTeaPrice = 100;
// iceTeaPrice > 50 ? true : false