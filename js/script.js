function openMenu() {
	console.log("out");
}
function goHome() {
	clearAll();
	let home = document.getElementById("home-div");
	home.style.display = "block";
}
function goResume() {
	clearAll();
	let resume = document.getElementById("resume-div");
	resume.style.display = "block";
}
function clearAll() {
	let all = document.getElementsByClassName("content-div");
	for (var i=0; i<all.length; i++) {
		all[i].style.display = "none";
	}
}