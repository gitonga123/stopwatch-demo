// Fetch API is an interface that is used to make network request/
// used instead of XMLHttp request
//method returns a Promise that contains a Response object
// returns a promise

require('es6-promise').polyfill();
require('isomorphic-fetch');

fetch("https://jsonplaceholder.typicode.com/todos/1").then(function(result) {
	return result.json();
}).then(function(result) {
	console.log(result);
}).catch(function(error) {
	console.log(error);
});