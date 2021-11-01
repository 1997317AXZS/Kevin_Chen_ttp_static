Clock();

setInterval("Clock()", 1000);

function Clock(){

	var curDay = new Date();

	var curTime = curDay.toLocaleTimeString();

	document.getElementById("time").innerHTML = curTime;
}
