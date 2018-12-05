// global variables
var time = 0;

var start = document.getElementById('startStop');
var displayTime = document.getElementById('timesection');
var resetTimer = document.getElementById('resetClock');
var recordTimer = document.getElementById('recordTime');
var recordList = document.getElementById('recordedtimesection');

var startWatch = true;
var timer;
var captureTime;

setUp();

function startTimer() {
	timer = setInterval(function() {
		time++;
		displayTime.innerHTML = time / 100;
	});
}

function setUp() {

	displayTime.innerHTML = time;

	start.addEventListener('click', function() {
		toggle();
	});

	resetTimer.addEventListener('click', function() {
		resetFunction();
	});

	recordTimer.addEventListener('click', function() {
		recordFunction();
	});
}

function resetFunction() {
		clearInterval(timer);
		startWatch = true;
		displayTime.innerHTML ='0';
		recordList.innerHTML ='';
		start.innerHTML = 'Start';
		captureTime ='';
		time = 0;
		clearInterval(timer);
}

function recordFunction() {
	captureTime = time / 100;

	recordList.innerHTML += `<li>${captureTime}</li>`;
}

function toggle() {
	if (startWatch) {
		start.innerHTML = 'Stop';
		startTimer();
		startWatch = false;
	} else {
		start.innerHTML = 'Start';
		clearInterval(timer);
		startWatch = true;
	}
}

document.addEventListener('keypress', handleKeyPress);

function handleKeyPress(event) {
	var keyPressed = event.key.toLowerCase();
	if (keyPressed === 's') {
		toggle();
	} else if (keyPressed === 't') {
		recordFunction();
	} else if (keyPressed === 'r') {
		resetFunction();
	}
}
