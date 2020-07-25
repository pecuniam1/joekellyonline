var BREAKPOINT = 700;
window.addEventListener('resize', collapseMobileNavMenu);
function collapseMobileNavMenu() {
    var navMenu = document.getElementById("nav-links");
    navMenu.style.width = "0px";
    if (window.innerWidth >= BREAKPOINT) {
        navMenu.style.width = "auto";
    }
}
function toggleMenu() {
    var navMenu = document.getElementById("nav-links");
    if (navMenu.style.width = "200px") {
        navMenu.style.width = "200px";
    }
    else {
        collapseMobileNavMenu();
    }
}
function changePage(divname) {
    clearAll();
    var div = document.getElementById(divname);
    div.style.display = "block";
    collapseMobileNavMenu();
}
function clearAll() {
    var all = document.getElementsByClassName("content-div");
    for (var i = 0; i < all.length; i++) {
        all[i].style.display = "none";
    }
}
//# sourceMappingURL=script.js.map