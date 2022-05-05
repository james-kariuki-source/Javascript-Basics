

const obj1 = {
    name : "James Nyamu",
    invoke : function(){ // the anonymous function
        return "Hello, did you call me? :)";
    }
}


const obj2 = {
    name : "James Nyamu",
    invoke(){ // this is a method
        return "Hello, did you call me also? :)";
    }
}

console.log(obj1.invoke());

console.log(obj2.invoke());