// why does full screen reload disappear home and resume?
const BREAKPOINT: number = 700;
/**
 * event listener to hide mobile nav menu in case of resize.
 */
window.addEventListener('resize', windowResize);

function windowResize() {
	resetHamburger();
	collapseMobileNavMenu();
}
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
 * Toggles the menu on and off. Also toggles the menu pane.
 */
function toggleMenu() {
	document.getElementsByClassName('menu-top')[0].classList.toggle('menu-top-click');
	document.getElementsByClassName('menu-middle')[0].classList.toggle('menu-middle-click');
	document.getElementsByClassName('menu-bottom')[0].classList.toggle('menu-bottom-click');
}
/**
 * Resets the hamburger menu to a closed state and hides menu pane.
 */
function resetHamburger() {
	document.getElementsByClassName('menu-top')[0].classList.remove('menu-top-click');
	document.getElementsByClassName('menu-middle')[0].classList.remove('menu-middle-click');
	document.getElementsByClassName('menu-bottom')[0].classList.remove('menu-bottom-click');
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
	let all = document.getElementsByClassName("content") as HTMLCollectionOf<HTMLElement>;
	for (let i=0; i<all.length; i++) {
		all[i].style.display = "none";
	}
}