// sequencing asynch operations

var promise = Promise.resolve("hello");
var promise2 = promise.then(function(result){
	console.log(result);
	return Promise.resolve("12345");
});

promise2.then(function(result){
	console.log(result); // logs 12345
}).catch(function(error) {
	console.log(error);
});

