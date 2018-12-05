// global variables
var start = document.getElementById("startStop");
var startWatch = true;
var stopWatch = true;

start.addEventListener("click", function() {
	toggle();
});

function toggle() {
	if (startWatch) {
		start.innerHTML = "Stop";
			startWatch = false;
	} else {
		start.innerHTML = "Start";
	}
}