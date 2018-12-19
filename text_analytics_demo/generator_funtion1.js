// Generators are functions that can be paused and be resumd
// yeild to pause and return the the output or receive the output
function* genFunc() {
	yield 'a';
	yield 'Daniel Mutwiri';
	yield ;
	yield 123;

	return "finished";
}

genFunc();