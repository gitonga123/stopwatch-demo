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
		clearInterval(timer);
		startWatch = true;
		displayTime.innerHTML ='0';
		recordList.innerHTML ='';
		start.innerHTML = 'Start';
	});

	recordTimer.addEventListener('click', function() {
		captureTime = time / 100;
		recordList.innerHTML += captureTime + '<br />';
	});
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
