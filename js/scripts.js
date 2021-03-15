//JS for sticky navbar
//When the user scrolls on the page, execute stickyNav
window.onscroll = function() {stickyNav()};

//Get the navbar
var navbar = document.getElementById("navbar");

//Get the main content
var mainText = document.getElementById("main-text");

//Get the offset position of the navbar
var sticky = navbar.offsetTop + 339;

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

document.getElementsByClassName("nav-item").style.color = "blue";
