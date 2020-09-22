const BREAKPOINT = 700;
window.addEventListener('resize', windowResize);
window.addEventListener('load', () => {
    registerSW();
});
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
    let stuff = {
        "name": document.getElementById("name").value,
        "phone": document.getElementById("phone").value,
        "email": document.getElementById("email").value,
        "subject": document.getElementById("subject").value
    };
    console.log('stuff :>> ', stuff);
    postData('https://api.joekellyonline.com/contact', stuff)
        .then(data => { console.log(data); });
}
async function postData(url = '', data = {}) {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log('data.html_url :>> ', data.html_url);
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