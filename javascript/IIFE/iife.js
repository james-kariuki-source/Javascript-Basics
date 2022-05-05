/** IIFE (Immediatly Invoke Function Expression)
 *
 * syntax:
 *
 *      (function(){
 *          //Body of the function
 *      })();
 *
 *
 */

//For example:

const fun = (function () {
	let str = "This function expression is invoked immediately";

	return str;
})();

const fun2 = (function () {
	let num = 2;

	return function(){
        return `The number value is ${num++}`;
    }
})();

console.log(fun);

console.log("\n");

console.log(fun2());
console.log(fun2());
console.log(fun2());
