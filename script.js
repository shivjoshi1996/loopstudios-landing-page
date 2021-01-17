var hamburger = document.querySelector(".hamburger");
var inactiveNav = document.querySelector(".mobile-inactive-nav");
var close = document.querySelector(".mobile-active-nav");
var closeMenu = document.querySelector(".close-menu");

hamburger.addEventListener("click", function(){
    close.classList.toggle("open");
    inactiveNav.classList.toggle("hide");
})

closeMenu.addEventListener("click", function(){
    close.classList.toggle("open");
    inactiveNav.classList.toggle("hide");
})


