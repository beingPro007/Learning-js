const myNums = [1,2,3,4]

// const total = myNums.reduce( function(acc,currVal){
//     return acc + currVal;
// });

// const total = myNums.reduce( (acc,curr) => acc + curr,0)

const shoopingCart = [
    {
        itemName : "JS course",
        price : 999
    },
    {
        itemName : "Python",
        price : 1999
    },
    {
        itemName : "Mob Dev course",
        price : 4999
    },
    {
        itemName : "Data Science course",
        price : 12999
    }
]

const total = shoopingCart.reduce( (acc,currVal) => currVal.price + acc , 0 )
console.log(total);