// Generators are functions that can be paused and be resumd
// yeild to pause and return the the output or receive the output
function* genFunc() {
	console.log("started");
	yield 'a';
	console.log("passed first yield");
	yield 'Daniel Mutwiri';
	console.log("passed second yield");
	yield ;
	console.log("Passed third yield");
	yield 123;

	return "finished";
}

var genObject = genFunc();
