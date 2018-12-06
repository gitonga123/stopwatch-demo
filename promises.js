// new promise constructor is called to create a new promise
// the resolve function is usd to change the status of the promise from pending
// fulfilled.
// once the resolve is called, future resolve and reject calls no longer have any effect
// reject is used to change the status of the promise from pending to rejected
// Error object provides a more detailed error report
// then and catch methods are used to hadle the results of promises once
// they ave finished pending.
// then handles resolved promises
// catch used to handle rejected promises

var promise = new Promisse(function(resolve, reject) {
	// do stuff
	var isSuccessful = true;
	setTimeout(function(){
		if (isSuccessful) {
			resolve("Success!");
		} else {
			reject(Error("Failure"));
		}
	}, 5000);
});

promise.then(function(val) {
	console.log(val);
}).catch(function(val) {
	console.log(val);
});

// then method can be called with sucess callback and a failure callback
// as an alternative to using the then and catch methods

promise.then(function(val) { // sucess callback
	console.log(val);
}, function(val) { // reject call back
	console.log(val);
});