// why does full screen reload disappear home and resume?




const BREAKPOINT: number = 700;
/**
 * event listener to hide mobile nav menu in case of resize.
 */
window.addEventListener('resize', collapseMobileNavMenu);
/**
 * Collpases the mobile nav menu.
 * @param {HTMLElement} navMenu - The nav menu element with id nav-links.
 */
function collapseMobileNavMenu() {
	let navMenu = document.getElementById("nav-links");
	navMenu.style.width = "0px";
	if (window.innerWidth >= BREAKPOINT) {
		navMenu.style.width = "auto";
	}
}
/**
 * Toggles the mobile menu.
 */
function toggleMenu() {
	let navMenu = document.getElementById("nav-links");
	if (navMenu.style.width != "250px") {
		navMenu.style.width = "250px";
	} else {
		collapseMobileNavMenu();
	}
}
/**
 * Shows the home div. This function is also called once on body load.
 */
function goHome() {
	clearAll();
	let home = document.getElementById("home-div");
	home.style.display = "block";
	collapseMobileNavMenu();
}
/**
 * Shows the resume div.
 */
function goResume() {
	clearAll();
	let resume = document.getElementById("resume-div");
	resume.style.display = "block";
	collapseMobileNavMenu();
}
/**
 * Removes all of the content-divs.
 */
function clearAll() {
	let all = document.getElementsByClassName("content-div") as HTMLCollectionOf<HTMLElement>;
	for (let i=0; i<all.length; i++) {
		all[i].style.display = "none";
	}
}