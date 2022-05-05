

function print1(){
    console.log("Hello");
    console.log("World");
}

function print2(){
    return " Hello World"
}


print1();
console.log(print2());

const fun1 = print2;

console.log(fun1());

let obj = { fun1 : print2 };

console.log(obj.fun1());