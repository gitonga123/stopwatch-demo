// prmises all
// takes in an array of promises and then waits for result
var promises1 = Promise.resolve("hello");
var promises2 = Promise.resolve({age: 2, height: 188});
var promise3 = 42;

Promise.all([promises1, promises2, promise3]).then(function(result) {
	console.log(result) // logs the array
}).catch( function(error) {
	console.log(error);
});