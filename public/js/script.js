const BREAKPOINT = 700;
window.addEventListener('resize', windowResize);
window.addEventListener('load', () => {
    registerSW();
    showNavigationMenu();
    changePage("home");
});
function showNavigationMenu() {
    document.getElementById("nav").style.display = "block";
}
function windowResize() {
    resetHamburger();
}
function toggleMenu() {
    document.getElementsByClassName('menu-top')[0].classList.toggle('menu-top-click');
    document.getElementsByClassName('menu-middle')[0].classList.toggle('menu-middle-click');
    document.getElementsByClassName('menu-bottom')[0].classList.toggle('menu-bottom-click');
    document.getElementById('nav-links').classList.toggle('open-menu');
}
function resetHamburger() {
    document.getElementsByClassName('menu-top')[0].classList.remove('menu-top-click');
    document.getElementsByClassName('menu-middle')[0].classList.remove('menu-middle-click');
    document.getElementsByClassName('menu-bottom')[0].classList.remove('menu-bottom-click');
    document.getElementById('nav-links').classList.remove('open-menu');
}
function changePage(divname) {
    clearAll();
    let div = document.getElementById(divname);
    div.style.display = "block";
    resetHamburger();
}
function clearAll() {
    let all = document.getElementsByClassName("content");
    for (let i = 0; i < all.length; i++) {
        all[i].style.display = "none";
    }
}
function postForm() {
	const formData = new FormData();
    let url = "https://api.joekellyonline.com/contact";
    // let stuff = {
    //     "name": document.getElementById("name").value,
    //     "phone": document.getElementById("phone").value,
    //     "email": document.getElementById("email").value,
    //     "subject": document.getElementById("subject").value
	// };
	formData.append("name", document.getElementById("name").value);
	formData.append("phone", document.getElementById("phone").value);
	formData.append("email", document.getElementById("email").value);
	formData.append("subject", document.getElementById("subject").value);
    fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
    })
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', JSON.stringify(response)));
}
async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('/service-worker.js');
        }
        catch (e) {
            console.log(`ServiceWorker Regsitration failed.`);
        }
    }
}
//# sourceMappingURL=script.js.map