const timeToString = function(time) {
	let timeHr = time / 3600000;
	let hh = Math.floor(timeHr);

	let timeMin = (timeHr - hh) * 60;
	let mm = Math.floor(timeMin);

	let timeSec = (timeMin - mm) * 60;
	let ss = Math.floor(timeSec);

	let timeMS = (timeMin - mm) * 1000;
	let ms = Math.floor(timeMS);

	formattedMM = mm.toString().padStart(2, "0");
	formattedSS = ss.toString().padStart(2, "0");
	formattedMS = ms.toString().padStart(3, "0");

	return `${formattedMM} : ${formattedSS} : ${formattedMS}`;
}

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

startBtn.addEventListener("click" , start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

let startTime;
let elapsedTime = 0;
let timerInterval;

function start(){
	startTime = Date.now() - elapsedTime;
	timerInterval = setInterval(function printTime() {
		elapsedTime = Date.now() - startTime;
		console.log(elapsedTime, startTime, Date.now());
		document.getElementById("display").innerHTML = timeToString(elapsedTime);
	}, 10);
	startBtn.style.border = '2px solid green';
	stopBtn.style.border = '1px solid';
	resetBtn.style.border = '1px solid';

}

function stop(){
	clearInterval(timerInterval);
	startBtn.style.border = '1px solid';
	stopBtn.style.border = '2px solid red';
}

function reset() {
	stop();
	document.getElementById("display").innerHTML = "00 : 00 : 000";
	startBtn.style.border = '1px solid';
	stopBtn.style.border = '1px solid';
	resetBtn.style.border = '2px solid #1e1e1e';
}

