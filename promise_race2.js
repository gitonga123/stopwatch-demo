// The Promise.race()
// method can also be used to limit the amount of time promises have to resolve by including a promise that is forced to reject after a given amount of time.

var promiseResolveTenSeconds = new Promise(function(resolve, reject) {
	setTimeout(function() {
		resolve("finished in 10 seconds");
	}, 10000);
});

var promiseRejectFiveSeconds = new Promise(function(resolve, reject) {
	setTimeout(function() {
		reject("error: promise took longer than 5 seconds to resolve");
	}, 5000);
});

Promise.race([promiseResolveTenSeconds, promiseRejectFiveSeconds]).then(function() {
	console.log(result);
}).catch(function(error) {
	console.log(error);
});