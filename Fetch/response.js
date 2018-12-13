// Handling Fetch Responses
require('es6-promise').polyfill();
require('isomorphic-fetch');

fetch("https://jsonplaceholder.typicode.com/todos/1").then(function(result) {
	//console.log(result);
	if (result.ok) {
		return result.text();
	} else {
		console.log(result.status);
		return Promise.reject(result.status);
	}
}).then(function(result) {
	console.log(result);
}).catch(function(error) {
	console.log("Error: " + error);
});