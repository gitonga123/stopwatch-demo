// promise race method takes in an array of prmises and takes the result
//  of the promise that rejects or resolves the fastest
var promise1 = new Promise(function(resolve, reject) {
	setTimeout(function() {
		resolve("finished in two seconds");
	}, 2000);
});

var promise2 = new Promise(function(resolve, reject) {
	setTimeout(function() {
		resolve("finished in one seconds");
	}, 1000)
});

Promise.race([promise1, promise2]).then(function(result) {
	console.log(result);
}).catch(function() {
	console.log(error);
});