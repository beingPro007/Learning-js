//objects using constructor(SingleTon object declaration)
const tinderUser = new Object()
tinderUser.id ="123abc"
tinderUser.name = "John"
tinderUser.loggedIn = true

// console.log(tinderUser)
const regularUser = {
    email : "Some@gmail.com",
    fullName : {
        userfullName : {
            firstName : "Gautam",
            lastName :"Rana"
        }
    }
}
// console.log(regularUser.fullName.userfullName)

//+++++++++++++++++ Merging objects ++++++++++++++++\\
const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "a" , 4 : "b"}
// const obj3 = Object.assign({} , obj1 ,obj2) //{} ---> used to combine all values and gives a single object
const obj3  = {...obj1,...obj2} // best to use
// console.log(obj3)
const users = [
    {
        id : 1,
        email : "g@gmail.com"
    },
    {
        id : 2,
        email : "g@gmail.com"
    },
    {
        id : 3,
        email : "g@gmail.com"
    }
]
// console.log(users[1].email)
// console.log(users[2].email)
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogdedIn'));

//+++++++++++++++++++++++ Object Destructuring +++++++++++++++++++++++\\

const course = {
    courseName : "Js in Hindi",
    price : "999" ,
    courseInstructor : "Hitesh Sir"
}
const {courseInstructor : Instructor} = course
console.log(Instructor);

// { example of an data from an api
//     "name" : "Hitesh Sir",
//     "courseName" : "Json In Hindi",
//     "price" : "free"
// }