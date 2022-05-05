

const fun1 = function(){return "Hello you";}

const fun1 = () => "Hello you"; // the same as above


const fun2 = function(arg1){return `The value of the argument is ${arg1}`;}
//is the same as above
const fun2 = arg1 => `The value of the argument is ${arg1}`;


//anonymous function with two arguments
const fun3 = function(arg1,arg2){return arg1 * arg2;}

//using arrow function
const fun3 = (arg1,arg2) => arg1*arg2; // is same as above 
