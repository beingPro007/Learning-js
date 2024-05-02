//array : arrays in js have dynamic length as of in java have arraylist to see all methods go to mdn web docs or type Array in console of your browser
const myArr = [0,1,2,3,4,5] // Type ------> 1
const myHeroes = ["Shaktiman" , "naggarjuna"]
const myArr2 = new Array() //Type ----> 2
// console.log(myArr[0])

//Array Methods
// myArr.push(6)
// myArr.push(7)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)
// myArr.unshift(9) // -->Puts the 9 at the start of the index
// myArr.shift() // -->deletes from first index
// console.log(myArr)
// console.log(myArr.includes(9))
// console.log(typeof myArr.join())

// ++++++++++Slice and Splice ++++++++++++++\\
console.log("A ",myArr)

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B ",myArr)
const myn2 = myArr.splice(1,3)
console.log(myArr)
console.log(myn2)
// Note : Splice changes the Array while slice only prints a poriion of the array which we defined it to print without changing it
/*Output of the following code of slice and splice is:
A  [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2 ] --->not included 3
B  [ 0, 1, 2, 3, 4, 5 ]
[ 0, 4, 5 ] ---> changed myArr
[ 1, 2, 3 ] --->included 3
*/
