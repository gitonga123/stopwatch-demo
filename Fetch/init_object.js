// the fetch method can also take an option init object
// this object applies custom settings to the fetch request
//this init object specifies the method, headers, mode and body of the request
require('es6-promise').polyfill();
require('isomorphic-fetch');

var initObject = {
	method: 'POST',
	headers: new Headers(),
	mode: 'cors',
	body: "{}"
}

fetch("https://jsonplaceholder.typicode.com/posts",initObject).then(function(result) {
	return result.json();
}).then(function(result) {
	console.log(result)
}).catch(function(error) {
	console.log(error)
});