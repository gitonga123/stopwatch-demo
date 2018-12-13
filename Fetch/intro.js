// Fetch API is an interface that is used to make network request/
// used instead of XMLHttp request
//method returns a Promise that contains a Response object
// returns a promise
// The fetch() method takes in an URL endpoint and is used to make a network request
// extraction methods

// .json()
// .text()
// .blob()

require('es6-promise').polyfill();
require('isomorphic-fetch');

fetch("https://jsonplaceholder.typicode.com/todos/1").then(function(result) {
	return result.json();
}).then(function(result) {
	console.log(result);
}).catch(function(error) {
	console.log(error);
});

fetch("https://jsonplaceholder.typicode.com/todos/1").then(function(result) {
	return result.text();
}).then(function(result) {
	console.log(result);
}).catch(function(error) {
	console.log(error);
});