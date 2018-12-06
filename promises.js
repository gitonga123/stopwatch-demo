// new promise constructor is called to create a new promise
// the resolve function is usd to change the status of the promise from pending
// fulfilled.
// once the resolve is called, future resolve and reject calls no longer have any effect
// reject is used to change the status of the promise from pending to rejected
// Error object provides a more detailed error report

var promise = new Promisse(function(resolve, reject) {
	// do stuff
	var isSuccessful = true;
	if (isSuccessful) {
		resolve("Success!");
	} else {
		reject(Error("Failure"));
	}
})