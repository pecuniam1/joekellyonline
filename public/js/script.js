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
    let url = "https://api.joekellyonline.com/contact";
    const formData = new FormData();
    formData.append("name", document.getElementById("name").value),
        formData.append("phone", document.getElementById("phone").value),
        formData.append("email", document.getElementById("email").value),
        formData.append("subject", document.getElementById("subject").value);
    fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: formData
    })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
    })
        .catch((error) => {
        console.error('Error:', error);
    });
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