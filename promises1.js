var promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		var value = Math.random();
		if (value > .5) {
			resolve(value);
		} else {
			reject(value);
		}
	}, 5000);
});

promise.then(function(val) {
	console.log("Success: " + val);
}).catch(function(err) {
	console.log("Error: " +  err);
})