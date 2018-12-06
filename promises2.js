// transforming values using the return statment
// within the then callnack
var promise = Promise.resolve("hello");

var promise2 = promise.then(function(result){
	console.log(result);
	return result + " World";
});

promise2.then(function(result) {
	console.log(result); // hello world
})