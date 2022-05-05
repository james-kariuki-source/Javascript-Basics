

for (let a = 0, d = 5; a < 5; a++, d--){
    console.log(a + " and " + d);
}

for(let a = 0; a < 5; a++){
    for(let b = 5; b > a; b--){
        console.log("*");
    }
    console.log("\n");
}