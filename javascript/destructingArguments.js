

const obj = {

    firstname : "Ethan",
    lastname : "Hunt"

};

const obj2 = ["Jason", "Bourne"];

function getNames({firstname,lastname}){
    return `${firstname} ${lastname}`;
}

function getNames2([firstname,lastname]){
    return `${firstname} ${lastname}`;
}


console.log(getNames(obj));

console.log(getNames2(obj2));

