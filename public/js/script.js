const BREAKPOINT = 700;
const myForm = document.getElementById('contact_form');
window.addEventListener('resize', windowResize);
window.addEventListener('load', () => {
    registerSW();
    showNavigationMenu();
    changePage("home");
});
myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    fetch("https://api.joekellyonline.contact", {
        method: 'POST',
        body: formData
    }).then(function (response) {
        response.json();
    }).then(function (text) {
        console.log(text);
    }).catch(function (error) {
        console.error('error :>> ', error);
    });
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