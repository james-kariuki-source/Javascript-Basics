

function welcome(){
    return`Welcome to ${this.city}, ${this.country}`;
}

const obj1 = {
    city : "Nairobi",
    country : "Kenya"
};
const obj2 = {country: "Kenya"};

// calling the function without the call method
console.log(welcome());

//Calling the function with the all method
console.log(welcome.call(obj1));

console.log(welcome.call(obj2));