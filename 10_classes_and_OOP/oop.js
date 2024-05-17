const user = {
    username: "Gautam",
    loginCount: 8,
    signedIN: true,

    getuserDetails : function(){
        //console.log("Got user details from db");
        // console.log(`UserName ${this.username}`)
        console.log(this);
    }
}

// console.log(user.getuserDetails());
// console.log(this)

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this; --> not required as they are returned by default..
}

const user1 = new User('gautam',12,true);
// console.log(user1);
console.log(user1.constructor);