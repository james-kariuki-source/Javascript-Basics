

/** this keyword refers to the current object */

const obj = {
    name : "James",
    greeting(){
        return `Hello ${this.name}`;
    }
};

console.log(obj.greeting());