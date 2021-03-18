//JS for sticky navbar
//When the user scrolls on the page, execute stickyNav
window.onscroll = function() {stickyNav()};

//Get the navbar
var navbar = document.getElementById("navbar");
var navbarHome = document.getElementById("navbar-home");

//Get the main content
var mainText = document.getElementById("main-text");

//Get the offset position of the navbar
var sticky = navbar.offsetTop + 285;
var stickyHome = navbarHome.offsetTop;

//Add the sticky class to the navbar when you reach its scroll position
//Remove the sticky class when you leave the scroll position
function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        mainText.classList.add("top-bumper")
    } else {
        navbar.classList.remove("sticky")
        mainText.classList.remove("top-bumper")
    }
}

function stickyHomeNav() {
    if (window.pageYOffset >= stickyHome) {
        navbarHome.classList.add("sticky")
        mainText.classList.add("top-bumper")
    } else {
        navbarHome.classList.remove("sticky")
        mainText.classList.remove("top-bumper")
    }
}

