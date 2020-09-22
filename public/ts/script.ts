// why does full screen reload disappear home and resume?
const BREAKPOINT: number = 700;
/**
 * event listener to hide mobile nav menu in case of resize.
 */
window.addEventListener('resize', windowResize);
window.addEventListener('load', () => {
	registerSW();
});

function windowResize() {
	resetHamburger();
	// collapseMobileNavMenu();
}
/**
 * Collpases the mobile nav menu.
 * @param {HTMLElement} navMenu - The nav menu element with id nav-links.
 */
// function collapseMobileNavMenu() : void {
// 	let navMenu = document.getElementById("nav-links");
// 	navMenu.style.width = "0px";
// 	if (window.innerWidth >= BREAKPOINT) {
// 		navMenu.style.width = "auto";
// 	}
// }
/**
 * Toggles the menu on and off. Also toggles the menu pane.
 */
function toggleMenu() {
	document.getElementsByClassName('menu-top')[0].classList.toggle('menu-top-click');
	document.getElementsByClassName('menu-middle')[0].classList.toggle('menu-middle-click');
	document.getElementsByClassName('menu-bottom')[0].classList.toggle('menu-bottom-click');
	document.getElementById('nav-links').classList.toggle('open-menu');
}
/**
 * Resets the hamburger menu to a closed state and hides menu pane.
 */
function resetHamburger() {
	document.getElementsByClassName('menu-top')[0].classList.remove('menu-top-click');
	document.getElementsByClassName('menu-middle')[0].classList.remove('menu-middle-click');
	document.getElementsByClassName('menu-bottom')[0].classList.remove('menu-bottom-click');
	document.getElementById('nav-links').classList.remove('open-menu');
}
/**
 * Changes the page base on whatever div id is passed.
 * @param {string} divname - The id of the div.
 */
function changePage(divname: string): void {
	clearAll();
	let div: HTMLElement = document.getElementById(divname);
	div.style.display = "block";
	resetHamburger();
}
/**
 * Removes all of the content-divs.
 */
function clearAll(): void {
	let all = document.getElementsByClassName("content") as HTMLCollectionOf<HTMLElement>;
	for (let i = 0; i < all.length; i++) {
		all[i].style.display = "none";
	}
}

function postForm(): void {
	let url = "https://api.joekellyonline.com/contact";
	let stuff = {
		"name": (document.getElementById("name") as HTMLInputElement).value,
		"phone": (document.getElementById("phone") as HTMLInputElement).value,
		"email": (document.getElementById("email") as HTMLInputElement).value,
		"subject": (document.getElementById("subject") as HTMLInputElement).value
	};
	fetch(url, {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		mode: 'no-cors', // no-cors, *cors, same-origin
		// cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		// credentials: 'same-origin', // include, *same-origin, omit
		// headers: {
			// 'Content-Type': 'application/json'
			// 'Content-Type': 'application/x-www-form-urlencoded',
		// },
		// redirect: 'follow', // manual, *follow, error
		// referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(stuff) // body data type must match "Content-Type" header
	}).then(function(response) {
		return response.json();
	}).then(function(data) {
		console.log('data.html_url :>> ', data.html_url);
	});
}

/**
 * Register the service worker
 */
async function registerSW() {
	if ('serviceWorker' in navigator) {
		try {
			await navigator.serviceWorker.register('/service-worker.js');
		} catch (e) {
			console.log(`ServiceWorker Regsitration failed.`);
		}
	}
}