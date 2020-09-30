/**
 * Event listener to hide mobile nav menu in case of resize.
 */
window.addEventListener('resize', () => {
	resetHamburger();
});

/**
 * Event listener to fire when page loads. This registers the service worker, shows the home-div, and shows the nav menu.
 * The nav menu is hidden so prevent clicking on a nav link before the js functionality has loaded.
 */
window.addEventListener('load', () => {
	registerSW();
	changePage("home");
	showNavigationMenu();
});

/**
 * This function exists to prevent early clicking on the menu when the content has not loaded yet.
 */
function showNavigationMenu() {
	document.getElementById("nav").style.display = "block";
}

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

/**
 * This is fired when the 'submit' button is hit on the contact page.
 */
function postForm(): void {
	const nameIsValid  = (document.getElementById("name") as HTMLFormElement).checkValidity();
	const subjectIsValid  = (document.getElementById("subject") as HTMLFormElement).checkValidity();
	if (nameIsValid && subjectIsValid) {
		let url = "https://api.joekellyonline.com/contact";
	   let formData = {
		   "name": (document.getElementById("name") as HTMLInputElement).value,
		   "phone": (document.getElementById("phone") as HTMLInputElement).value,
		   "email" :(document.getElementById("email") as HTMLInputElement).value,
		   "subject": (document.getElementById("subject") as HTMLInputElement).value
	   }
	   fetch(url, {
		   method: 'POST', // *GET, POST, PUT, DELETE, etc.
		   mode: 'no-cors', // no-cors, *cors, same-origin
		   // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		   // credentials: 'same-origin', // include, *same-origin, omit
		   headers: {
			   'Content-Type': 'application/json'
			   // 'Content-Type': 'application/x-www-form-urlencoded',
		   },
		   // redirect: 'follow', // manual, *follow, error
		   referrerPolicy: 'origin', // Determines how much of the original url is sent with requrest.
		   body: JSON.stringify(formData) // body data type must match "Content-Type" header
	   }).then(function(response) {
		   console.log(`Request success: `, response); //not working, but posting ok
		   confirmSend();
	   }).catch(function(error) {
		   console.log(`Request failure: `, error);
		   confirmSend();
	   });
	} else {
		alert("You need to fill out at least the name and what you want.")
	}
}

/**
 * This fires after the contact form has been submitted succesfully.
 */
function confirmSend() : void {
	(<HTMLFormElement>document.getElementById("myForm")).reset();
	alert("Contact has been made");
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
