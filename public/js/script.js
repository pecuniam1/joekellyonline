const BREAKPOINT = 700;
window.addEventListener('resize', windowResize);
window.addEventListener('load', () => {
    registerSW();
    changePage("home");
    showNavigationMenu();
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
    const nameIsValid = document.getElementById("name").checkValidity();
    const subjectIsValid = document.getElementById("subject").checkValidity();
    if (nameIsValid && subjectIsValid) {
        let url = "https://api.joekellyonline.com/contact";
        let formData = {
            "name": document.getElementById("name").value,
            "phone": document.getElementById("phone").value,
            "email": document.getElementById("email").value,
            "subject": document.getElementById("subject").value
        };
        fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'unsafe-url',
            body: JSON.stringify(formData)
        }).then(function (response) {
            console.log(`Request success: `, response);
            confirmSend();
        }).catch(function (error) {
            console.log(`Request failure: `, error);
            confirmSend();
        });
    }
    else {
        alert("You need to fill out at least the name and what you want.");
    }
}
function confirmSend() {
    document.getElementById("myForm").reset();
    alert("Contact has been made");
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