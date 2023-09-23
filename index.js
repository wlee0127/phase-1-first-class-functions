function receivesAFunction(callback){
    return callback()
}

function display(){
    console.log("test");
}

const fn = (arg) => {
    return arg
}

function returnsANamedFunction() {
    return fn;
}

function returnsAnAnonymousFunction(){
    return function(){console.log("test")}
}

returnsAnAnonymousFunction()
//returnsAnAnonymousFunction(() => console.log("test"))



