require('es6-promise').polyfill();
require('isomorphic-fetch');

var body = {id: "123", title: "abc"}
var initObject = {
	method: 'POST',
	body: JSON.stringify(body)
}

fetch("https://jsonplaceholder.typicode.com/posts",initObject).then(function(result) {
}).then(function(result) {
	return result.json()
}).then(function(result) {
	console.log(result)
}).catch(function(error) {
	console.log(error);
});