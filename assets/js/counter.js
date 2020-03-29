function count(start) {
	var i = setInterval(function() {
		let div = document.getElementById("time");
		start += 1;
		let time = new Date(1000 * start).toISOString().substr(11, 8);
		div.innerHTML = time;
		return time;
  }, 1000);
}

function init() {
	let params = new URLSearchParams(window.location.search);
	let start = params.get('start');
	let end = params.get('end');
	if (start) {
		start = parseInt(start);
		count(start);
	}
}

init();