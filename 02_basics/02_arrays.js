const marvel_heros = ["thor" , "Iron Man" , "SpiderMan"]
const dc_heros = ["superman" , "flash" ,"batman"]
// marvel_heros.push(dc_heros) ----> pushes to exact array                              #output :[ 'thor', 'Iron Man', 'SpiderMan', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])
// const allHeros = marvel_heros.concat(dc_heros) //---> concates both the array but creates a new array and return the merged array of them.....
// console.log(allHeros)
//Spread opertor\\
// const all_new_heroes = [...marvel_heros,...dc_heros]
// console.log(all_new_heroes)
// const another_arr = [1,3,[5,3],8,[2],9,[10,1,2[4,9]]]
// const real_another_arr = another_arr.flat(Infinity)
// console.log(real_another_arr)

//Array from string
// console.log(Array.from("Gautam"))
// console.log(Array.from({Name : "Gautam"})) //Interesting Case

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1,score2,score3))
