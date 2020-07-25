var BREAKPOINT = 700;
window.addEventListener('resize', windowResize);
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
    var div = document.getElementById(divname);
    div.style.display = "block";
    resetHamburger();
}
function clearAll() {
    var all = document.getElementsByClassName("content");
    for (var i = 0; i < all.length; i++) {
        all[i].style.display = "none";
    }
}
//# sourceMappingURL=script.js.map