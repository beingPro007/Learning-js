// Immediately Invoked Function Expressions (IIFE)
/*These techniques allow you to encapsulate code and execute it immediately without polluting the enclosing scope.*/
//named IIFE
(function chai() {
    console.log(`DB Connected`);
})();//here we must need to use ;(semicolon) if we dont use this and write same type of iife we get error as js dont know when to stop the context of code so it is must to use
//non - named iife
((name) => {
    console.log(`DB Connected ${name}`);
})("Gautam")

//Here we written two iifes in a same file which is possible using ;(semicolon)........