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
function collapseMobileNavMenu() : void {
	let navMenu = document.getElementById("nav-links");
	navMenu.style.width = "0px";
	if (window.innerWidth >= BREAKPOINT) {
		navMenu.style.width = "auto";
	}
}
/**
 * Toggles the mobile menu.
 */
function toggleMenu() : void {
	let navMenu = document.getElementById("nav-links");
	if (navMenu.style.width = "200px") {
		navMenu.style.width = "200px";
	} else {
		collapseMobileNavMenu();
	}
}
/**
 * Changes the page base on whatever div id is passed.
 * @param {string} divname - The id of the div.
 */
function changePage(divname: string) : void {
	clearAll();
	let div:HTMLElement = document.getElementById(divname);
	div.style.display = "block";
	collapseMobileNavMenu();
}
/**
 * Removes all of the content-divs.
 */
function clearAll() : void {
	let all = document.getElementsByClassName("content-div") as HTMLCollectionOf<HTMLElement>;
	for (let i=0; i<all.length; i++) {
		all[i].style.display = "none";
	}
}