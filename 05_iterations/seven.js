const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.map( (num) => num +10)
const newNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);//for every chaining we get  the the value of its before evaluated value from its before chain -- tuti futi english
console.log(newNums);
