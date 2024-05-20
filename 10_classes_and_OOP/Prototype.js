// let myName = "Gautam        "

// console.log(myName.truelength); ---> Challenge to trim the length without writing myName.trim().length and will happen using prototype


let myHero = ["Thor" , "SpiderMan"]

let heroPower = {
    Thor: "hammer",
    SpiderMan: "sling",
    getSpiderPower: function(){
        console.log(`Spidey Power is ${this.SpiderMan}`);
    }
}
//here we injected hitesh name property to the top level of object package and all can able to access it also arrays strings all
Object.prototype.hitesh = function(){
    // console.log(`Hitesh is present in all objects`);
}

// heroPower.hitesh()

Array.prototype.heyHitesh = function(){
    // console.log(`Hitesh says hello`);
}

myHero.hitesh()
myHero.heyHitesh();
// heroPower.heyHitesh(); ---> throws error as we dont able to give power to object as we initially given power to only array but not the object which shows that arrays,strings and other can acess the method given to object but vice versa is not true....

/* *************************Inheritance*************************** */
const user = {
    name : "Chai",
    email : "chai@google.com"
}
const teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false,
}
const TASupprort = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport// this access the TeachingSupport function(prototyple inheritance)
}

teacher.__proto__ = user;//another method too inherit

// modern syntax
Object.setPrototypeOf(TeachingSupport,teacher)//teacher support get the properties of techingsupport.....

let anotherUserName = "chaiaurcode               "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
}
anotherUserName.trueLength()
"gautam".trueLength();
"icetea".trueLength();